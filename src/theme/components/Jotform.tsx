/**
 * Copyright 2022 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const handleIFrameMessage = (e: any): void => {
  if (typeof e.data === 'object') {
    return;
  }
  const args = e.data.split(':');
  const iframe: HTMLIFrameElement = document.getElementById(
    args.length > 2
      ? 'JotFormIFrame-' + args[args.length - 1]
      : 'JotFormIFrame',
  ) as HTMLIFrameElement;

  if (!iframe) {
    return;
  }

  switch (args[0]) {
    case 'scrollIntoView':
      iframe.scrollIntoView();
      break;
    case 'setHeight':
      iframe.style.height = args[1] + 'px';
      break;
    case 'collapseErrorPage':
      if (iframe.clientHeight > window.innerHeight) {
        iframe.style.height = window.innerHeight + 'px';
      }
      break;
    case 'reloadPage':
      window.location.reload();
      break;
    case 'loadScript':
      if (!isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
        break;
      }
      let src = args[1];
      if (args.length > 3) {
        src = args[1] + ':' + args[2];
      }
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      break;
    case 'exitFullscreen':
      if (window.document.exitFullscreen) window.document.exitFullscreen();
      /*      else if (window.document.mozCancelFullScreen)
              window.document.mozCancelFullScreen();
            else if (window.document.mozCancelFullscreen)
              window.document.mozCancelFullScreen();
            else if (window.document.webkitExitFullscreen)
              window.document.webkitExitFullscreen();
            else if (window.document.msExitFullscreen)
              window.document.msExitFullscreen();*/
      break;
  }
  const isJotForm = e.origin.indexOf('jotform') > -1 ? true : false;

  if (isJotForm && iframe.contentWindow?.postMessage) {
    const urls = {
      docurl: encodeURIComponent(document.URL),
      referrer: encodeURIComponent(document.referrer),
    };
    iframe.contentWindow.postMessage(
      JSON.stringify({ type: 'urls', value: urls }),
      '*',
    );
  }
};

const isPermitted = (originUrl: string, whitelisted_domains: any): boolean => {
  const url = document.createElement('a');
  url.href = originUrl;
  const hostname = url.hostname;
  let result = false;
  if (typeof hostname !== 'undefined') {
    whitelisted_domains.forEach(function (element: any): void {
      if (
        hostname.slice(-1 * element.length - 1) === '.'.concat(element) ||
        hostname === element
      ) {
        result = true;
      }
    });
    return result;
  }
  return result;
};

const buildSrcParams = (): string[] => {
  let iframeParams: string[] = [];
  if (
    typeof window !== 'undefined' &&
    window.location.href &&
    window.location.href.indexOf('?') > -1
  ) {
    iframeParams = iframeParams.concat(
      window.location.href
        .substr(window.location.href.indexOf('?') + 1)
        .split('&'),
    );
  }
  iframeParams.push('isIframeEmbed=1');
  return iframeParams;
};

export const Jotform = (): React.DetailedHTMLProps<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
> => {
  const ifr: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > = (
    <iframe
      id="JotFormIFrame-221232749309354"
      title="BPMN generation from event logs"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.parent.scrollTo(0, 0);
        }
      }}
      allowTransparency={true}
      allowFullScreen={true}
      allow="geolocation; microphone; camera"
      src={
        'https://form.jotform.com/221232749309354?' + buildSrcParams().join('&')
      }
      frameBorder="0"
      style={{
        border: 'none',
        minWidth: '25%',
        width: '30vw',
        height: '75vh',
        // margin: '1rem',
      }}
      scrolling="no"
    ></iframe>
  );

  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('message', handleIFrameMessage, false);
    /*  } else if (window.attachEvent) {
        window.attachEvent('onmessage', handleIFrameMessage);*/
  }
  return ifr;
};
