/**
 * Copyright 2023 Bonitasoft S.A.
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
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vanilla-cookieconsent" />

import { CookieManager } from '../../helper';

// import Logo from '../images/logo.svg';

const logo =
  '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgICAgICBpZD0iTGF5ZXJfMSIKICAgICAgICB4PSIwcHgiCiAgICAgICAgeT0iMHB4IgogICAgICAgIHZpZXdCb3g9IjAgMCA1MDAgNTAwIgogICAgICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzIGlkPSJkZWZzMzciPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLXBvd2VybWFzay1wYXRoLWVmZmVjdDg3MSIKICAgICAgICAgICAgICBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiA+CiAgICAgICAgICAgIDxwYXRoIGlkPSJtYXNrLXBvd2VybWFzay1wYXRoLWVmZmVjdDg3MV9ib3giCiAgICAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgICAgICAgICAgIGQ9Ik0gNS41LDUgSCA0OTQuNyBWIDQ5NC4yIEggNS41IFoiIC8+CiAgICAgICAgICAgIDxnIGlkPSJnODY5IiBzdHlsZT0iIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9ImNpcmNsZTg2NSIKICAgICAgICAgICAgICAgICAgICAgICAgY3k9IjQyMiIKICAgICAgICAgICAgICAgICAgICAgICAgY3g9Ijg4LjYiCiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE1O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgICAgICAgICAgICAgIHI9IjI1LjgiCiAgICAgICAgICAgICAgICAgICAgICAgIGQ9Ik0gMTE0LjQsNDIyIEEgMjUuOCwyNS44IDAgMCAxIDg4LjYsNDQ3LjggMjUuOCwyNS44IDAgMCAxIDYyLjgsNDIyIDI1LjgsMjUuOCAwIDAgMSA4OC42LDM5Ni4yIDI1LjgsMjUuOCAwIDAgMSAxMTQuNCw0MjIgWiIgLz4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9ImNpcmNsZTg2NyIKICAgICAgICAgICAgICAgICAgICAgICAgY3g9IjQxNC42IgogICAgICAgICAgICAgICAgICAgICAgICBjeT0iNzcuOCIKICAgICAgICAgICAgICAgICAgICAgICAgcj0iMjUuOCIKICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICAgICAgICAgICAgICAgZD0ibSA0NDAuNCw3Ny44IGEgMjUuOCwyNS44IDAgMCAxIC0yNS44LDI1LjggMjUuOCwyNS44IDAgMCAxIC0yNS44LC0yNS44IDI1LjgsMjUuOCAwIDAgMSAyNS44LC0yNS44IDI1LjgsMjUuOCAwIDAgMSAyNS44LDI1LjggeiIgLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KICAgIDxzdHlsZSBpZD0ic3R5bGUyIiB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgICAgLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwQTQ0NjE7c3Ryb2tlLXdpZHRoOjE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KICAgICAgICAuc3Qxe2NsaXAtcGF0aDp1cmwoI1hNTElEXzNfKTt9CiAgICAgICAgLnN0MntmaWxsOiNGRkZGRkY7fQogICAgICAgIC5zdDN7ZmlsbDojMEE0NDYxO30KICAgICAgICAuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6I0UyMUQzODtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9CiAgICAgICAgLnN0NXtmaWxsOiNFMjFEMzg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLW1pdGVybGltaXQ6MDt9CiAgICA8L3N0eWxlPgogICAgPHBhdGggaWQ9InBhdGg0IgogICAgICAgICAgbWFzaz0idXJsKCNtYXNrLXBvd2VybWFzay1wYXRoLWVmZmVjdDg3MSkiCiAgICAgICAgICBjbGFzcz0ic3QwIgogICAgICAgICAgZD0ibSA0ODUuNywyNDkuNiBjIDAsMTMwLjEgLTEwNS41LDIzNS42IC0yMzUuNiwyMzUuNiAtODcuMywwIC0xNjMuNSwtNDcuNSAtMjA0LjIsLTExOCBDIDI1LjksMzMyLjYgMTQuNSwyOTIuNCAxNC41LDI0OS42IDE0LjUsMTE5LjUgMTIwLDE0IDI1MC4xLDE0IDM4MC4yLDE0IDQ4NS43LDExOS41IDQ4NS43LDI0OS42IFoiCiAgICAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAyMzk1O3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8ZyBpZD0iZzI0Ij4KICAgICAgICA8ZGVmcyBpZD0iZGVmczciPgogICAgICAgICAgICA8cGF0aCBpZD0iWE1MSURfMV8iIGQ9Ik0xMzcuMywyNTAuNGMwLTYyLjYsNTAuOS0xMTMuNSwxMTMuNS0xMTMuNXMxMTMuNSw1MC45LDExMy41LDExMy41cy01MC45LDExMy41LTExMy41LDExMy41IFMxMzcuMywzMTMsMTM3LjMsMjUwLjR6IiAvPgogICAgICAgIDwvZGVmcz4KICAgICAgICA8dXNlIGlkPSJ1c2U5IiB4bGluazpocmVmPSIjWE1MSURfMV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlO2ZpbGw6I2UyMDYxMztmaWxsLW9wYWNpdHk6MSIgLz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlhNTElEXzNfIj4KICAgICAgICAgICAgPHVzZSBpZD0idXNlMTEiIHhsaW5rOmhyZWY9IiNYTUxJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiAvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICAgICAgPGcgaWQ9ImcyMCIgY2xhc3M9InN0MSIgY2xpcC1wYXRoPSJ1cmwoI1hNTElEXzNfKSI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgaWQ9InBhdGgxNCIKICAgICAgICAgICAgICAgICAgICBjbGFzcz0ic3QyIgogICAgICAgICAgICAgICAgICAgIGQ9Ik0zNjEuNSwyMDYuMmMtMS43LTAuMy0zLjMsMC42LTMuOSwyLjFsLTE2LjQsNDAuN2wtMTQuMy0xNS4yYy0wLjktMC45LTIuMS0xLjMtMy4zLTEgYy0xLjIsMC4zLTIuMiwxLjItMi42LDIuNEwzMDEsMjk5LjZsLTgtMTBjLTAuNi0wLjgtMS42LTEuMy0yLjYtMS4zYy0xLDAtMiwwLjMtMi43LDEuMWwtMTAuMywxMC43bC0xNS42LTU0LjQgYy0wLjQtMS41LTEuNy0yLjUtMy4zLTIuNWMtMS41LDAtMi45LDAuOS0zLjQsMi40bC0xNy43LDUwLjZsLTEwLjQtNy4xYy0wLjgtMC41LTEuOC0wLjctMi43LTAuNWMtMC45LDAuMi0xLjgsMC44LTIuMywxLjYgICAgICAgICAgICAgICAgICAgbC0xNi43LDI3LjJsLTI0LjYtNS4zYy0xLjgtMC40LTMuNiwwLjctNC4xLDIuNGwtMTgsNjAuN2MtMC4zLDEuMS0wLjEsMi4yLDAuNiwzLjFjMC43LDAuOSwxLjcsMS40LDIuOCwxLjRoMTk3LjggICAgICAgICAgICAgICAgICAgYzEuOSwwLDMuNS0xLjYsMy41LTMuNWwwLjktMTY2LjRDMzY0LjMsMjA4LDM2My4xLDIwNi42LDM2MS41LDIwNi4yeiIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICBpZD0icGF0aDE2IgogICAgICAgICAgICAgICAgICAgIGNsYXNzPSJzdDIiCiAgICAgICAgICAgICAgICAgICAgZD0iTTM2MS41LDIwNi4yYy0xLjctMC4zLTMuMywwLjYtMy45LDIuMWwtMTAuMywyNS41bC0xLDE0NS43aDEzLjZjMS45LDAsMy41LTEuNiwzLjUtMy41bDAuOS0xNjYuNCBDMzY0LjMsMjA4LDM2My4xLDIwNi42LDM2MS41LDIwNi4yeiIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICBpZD0icGF0aDE4IgogICAgICAgICAgICAgICAgICAgIGNsYXNzPSJzdDIiCiAgICAgICAgICAgICAgICAgICAgZD0iTTM2NSwxNzkuOGMwLTEuOS0xLjYtMy41LTMuNS0zLjVsLTEzLjEtMC4xYzAsMCwwLDAsMCwwYy0xLjksMC0zLjUsMS42LTMuNSwzLjVjMCwxLjksMS41LDMuNSwzLjUsMy41bDQuNywwIEwzMzMuMywyMTVsLTEzLjctMTIuMWMtMC45LTAuOC0yLjEtMS4xLTMuMi0wLjhjLTEuMSwwLjMtMiwxLjItMi40LDIuM2wtMTYuOSw1MS4ybC0yLjYtMy45Yy0wLjYtMC45LTEuNi0xLjUtMi43LTEuNiBjLTEuMS0wLjEtMi4yLDAuNC0yLjksMS4ybC01LjQsNi40TDI2MC43LDE5NGMtMC41LTEuNC0xLjgtMi4zLTMuMi0yLjNjLTEuNSwwLTIuOCwwLjgtMy4zLDIuMmwtMjcuMSw2Ny4xbC04LjgtNC40ICAgICAgICAgICAgICAgICAgIGMtMS43LTAuOC0zLjctMC4yLTQuNiwxLjRsLTE3LjUsMzBsLTI1LjYtNC41Yy0xLjgtMC4zLTMuNSwwLjgtNCwyLjVMMTU0LjUsMzI5Yy0wLjUsMS45LDAuNiwzLjgsMi40LDQuM2MwLjMsMC4xLDAuNiwwLjEsMSwwLjEgICAgICAgICAgICAgICAgICAgYzEuNSwwLDIuOS0xLDMuNC0yLjZsMTEuMy00MC4xbDI0LjksNC40YzEuNCwwLjMsMi45LTAuNCwzLjYtMS43bDE3LTI5LjJsOS4yLDQuNmMwLjksMC40LDEuOSwwLjUsMi44LDAuMWMwLjktMC4zLDEuNi0xLjEsMi0yICAgICAgICAgICAgICAgICAgIGwyNS4xLTYyLjFsMjEuNyw2MC43YzAuNCwxLjIsMS40LDIsMi43LDIuM2MxLjIsMC4yLDIuNS0wLjIsMy4zLTEuMmw2LjMtNy40bDQsNmMwLjcsMS4xLDIuMSwxLjcsMy40LDEuNSAgICAgICAgICAgICAgICAgICBjMS4zLTAuMiwyLjQtMS4xLDIuOS0yLjRsMTcuNS01M2wxMi44LDExLjRjMC44LDAuNywxLjgsMSwyLjgsMC44YzEtMC4xLDEuOS0wLjcsMi41LTEuNmwyMC45LTMzLjdsMCw0LjVjMCwxLjksMS42LDMuNSwzLjUsMy41ICAgICAgICAgICAgICAgICAgIGMwLDAsMCwwLDAsMGMxLjksMCwzLjUtMS42LDMuNS0zLjVMMzY1LDE3OS44eiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPHVzZQogICAgICAgICAgICAgICAgaWQ9InVzZTIyIgogICAgICAgICAgICAgICAgeGxpbms6aHJlZj0iI1hNTElEXzFfIgogICAgICAgICAgICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDpub25lO3N0cm9rZTojZTIwNjEzO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8L2c+CiAgICA8cGF0aAogICAgICAgICAgICBpZD0icGF0aDI2IgogICAgICAgICAgICBjbGFzcz0ic3QzIgogICAgICAgICAgICBkPSJNMjEwLDQxNi4zYzAsNS40LDQuMyw5LjcsOS43LDkuN2g2MC42YzUuNCwwLDkuNy00LjMsOS43LTkuN3YtMTguOGMxMi44LTMuNCwyNC45LTguNSwzNi40LTE1LjFsMTMuMywxMy4zICAgICAgICAgICBjMS44LDEuOCw0LjMsMi44LDYuOSwyLjhjMi42LDAsNS0xLDYuOS0yLjhsNDIuOS00Mi45YzMuOC0zLjgsMy44LTkuOSwwLTEzLjdMMzgzLDMyNS45YzYuNi0xMS41LDExLjctMjMuNiwxNS4xLTM2LjRoMTguNyAgICAgICAgICAgYzUuNCwwLDkuNy00LjMsOS43LTkuN3YtNjAuNmMwLTUuNC00LjMtOS43LTkuNy05LjdoLTE4LjdjLTMuNC0xMi43LTguNS0yNC45LTE1LjEtMzYuNGwxMy4yLTEzLjJjMS44LTEuOCwyLjgtNC4zLDIuOC02LjkgICAgICAgICAgIGMwLTIuNi0xLTUtMi44LTYuOWwtNDIuOS00Mi45Yy0zLjgtMy44LTkuOS0zLjgtMTMuNywwbC0xMy4yLDEzLjJjLTExLjUtNi42LTIzLjYtMTEuNy0zNi40LTE1LjFWODIuOGMwLTUuNC00LjMtOS43LTkuNy05LjdoLTYwLjYgICAgICAgICAgIGMtNS40LDAtOS43LDQuMy05LjcsOS43djE4LjZjLTEyLjcsMy40LTI0LjksOC41LTM2LjQsMTUuMWwtMTMuMi0xMy4yYy0zLjgtMy44LTkuOS0zLjgtMTMuNywwbC00Mi45LDQyLjkgICAgICAgICAgIGMtMS44LDEuOC0yLjgsNC4zLTIuOCw2LjljMCwyLjYsMSw1LDIuOCw2LjlsMTMuMiwxMy4yYy02LjYsMTEuNS0xMS43LDIzLjYtMTUuMSwzNi40SDgzLjJjLTUuNCwwLTkuNyw0LjMtOS43LDkuN2wwLDYwLjYgICAgICAgICAgIGMwLDIuNiwxLDUsMi44LDYuOWMxLjgsMS44LDQuMywyLjgsNi45LDIuOGgxOC43YzMuNCwxMi44LDguNSwyNC45LDE1LjEsMzYuNGwtMTMuMywxMy4zYy0zLjgsMy44LTMuOCw5LjksMCwxMy43bDQyLjksNDIuOSAgICAgICAgICAgYzEuOCwxLjgsNC4zLDIuOCw2LjksMi44aDBjMi42LDAsNS0xLDYuOS0yLjhsMTMuMy0xMy4zYzExLjUsNi42LDIzLjYsMTEuNywzNi40LDE1LjFWNDE2LjN6IE0xNzcuNCwzNjIuMSAgICAgICAgICAgYy0zLjgtMi41LTguOS0xLjktMTIuMSwxLjNsLTExLjgsMTEuOEwxMjQuMywzNDZsMTEuOC0xMS44YzMuMi0zLjIsMy44LTguMywxLjMtMTIuMWMtOC44LTEzLjYtMTUtMjguNS0xOC40LTQ0LjMgICAgICAgICAgIGMtMS00LjUtNC45LTcuNy05LjUtNy43SDkyLjlsMC00MS4yaDE2LjZjNC42LDAsOC41LTMuMiw5LjUtNy43YzMuNC0xNS44LDkuNi0zMC43LDE4LjQtNDQuM2MyLjUtMy44LDEuOS04LjktMS4zLTEyLjFMMTI0LjQsMTUzICAgICAgICAgICBsMjkuMi0yOS4xbDExLjcsMTEuN2MzLjIsMy4yLDguMywzLjgsMTIuMSwxLjNjMTMuNi04LjgsMjguNS0xNSw0NC4zLTE4LjRjNC41LTEsNy43LTQuOSw3LjctOS41VjkyLjVoNDEuMlYxMDkgICAgICAgICAgIGMwLDQuNiwzLjIsOC41LDcuNyw5LjVjMTUuOCwzLjQsMzAuNyw5LjYsNDQuMywxOC40YzMuOCwyLjUsOC45LDEuOSwxMi4xLTEuM2wxMS43LTExLjdsMjkuMiwyOS4xbC0xMS43LDExLjcgICAgICAgICAgIGMtMy4yLDMuMi0zLjgsOC4zLTEuMywxMi4xYzguOCwxMy42LDE1LDI4LjUsMTguNCw0NC4zYzEsNC41LDQuOSw3LjcsOS41LDcuN2gxNi43djQxLjJoLTE2LjdjLTQuNiwwLTguNSwzLjItOS41LDcuNyAgICAgICAgICAgYy0zLjQsMTUuOC05LjYsMzAuNy0xOC40LDQ0LjNjLTIuNSwzLjgtMS45LDguOSwxLjMsMTIuMWwxMS44LDExLjhsLTI5LjEsMjkuMmwtMTEuOC0xMS44Yy0zLjItMy4yLTguMy0zLjgtMTIuMS0xLjMgICAgICAgICAgIGMtMTMuNiw4LjgtMjguNSwxNS00NC4zLDE4LjRjLTQuNSwxLTcuNyw0LjktNy43LDkuNXYxNi43aC00MS4ydi0xNi43YzAtNC42LTMuMi04LjUtNy43LTkuNUMyMDUuOSwzNzcsMTkxLDM3MC44LDE3Ny40LDM2Mi4xeiIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMjM5NTtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxjaXJjbGUKICAgICAgICAgICAgaWQ9ImNpcmNsZTI4IgogICAgICAgICAgICBjbGFzcz0ic3Q0IgogICAgICAgICAgICBjeD0iMjUwLjQiCiAgICAgICAgICAgIGN5PSIyNDkuNSIKICAgICAgICAgICAgcj0iMTEzLjUiCiAgICAgICAgICAgIHN0eWxlPSJzdHJva2U6I2UyMDYxMztzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPGNpcmNsZQogICAgICAgICAgICBpZD0iY2lyY2xlMzAiCiAgICAgICAgICAgIGNsYXNzPSJzdDUiCiAgICAgICAgICAgIGN4PSI4OC42IgogICAgICAgICAgICBjeT0iNDIyIgogICAgICAgICAgICByPSIxOCIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UyMDYxMztmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxjaXJjbGUKICAgICAgICAgICAgaWQ9ImNpcmNsZTMyIgogICAgICAgICAgICBjbGFzcz0ic3Q1IgogICAgICAgICAgICBjeD0iNDE0LjYiCiAgICAgICAgICAgIGN5PSI3Ny44IgogICAgICAgICAgICByPSIxOCIKICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UyMDYxMztmaWxsLW9wYWNpdHk6MSIgLz4KPC9zdmc+Cg==" alt="Logo" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 35px">';

const cookieManager = new CookieManager();

const analyticsCookieCategory = 'analytics';
const cookieExpirationDays = 365;
const handleAnalyticsCategory = (cookie: SavedCookieContent): void => {
  if (cookie.categories.includes(analyticsCookieCategory)) {
    cookieManager.setAllAnalyticsCookies(cookieExpirationDays);
  } else {
    gaOptout();

    // Clean the unnecessary cookies
    cookieManager.deleteAllAnalyticsCookies();
  }
};

export const initCookieConsentBanner = (): void => {
  if (
    process.env.GATSBY_GA_MEASUREMENT_ID &&
    !document.getElementById('cc--main')
  ) {
    // document.body.classList.add('theme_funky');
    // document.body.classList.add('theme_turquoise');
    // document.body.classList.add('theme_blue');

    const cookieConsent = initCookieConsent();

    cookieConsent.run({
      autorun: true,
      auto_language: 'document',
      current_lang: 'en',
      autoclear_cookies: true, // default: false
      cookie_expiration: cookieExpirationDays, // default: 182
      // page_scripts: true, // default: false
      force_consent: true, // default: false

      revision: 2, // default: 0

      gui_options: {
        consent_modal: {
          layout: 'cloud', // box,cloud,bar
          position: 'bottom center', // bottom,middle,top + left,right,center
          transition: 'slide', // zoom,slide
          swap_buttons: false, // enable to invert buttons
        },
        settings_modal: {
          layout: 'bar', // box,bar
          position: 'right', // right,left (available only if bar layout selected)
          transition: 'slide', // zoom,slide
        },
      },

      onFirstAction: (
        userPreferences: UserPreferences,
        cookie: SavedCookieContent,
      ): void => {
        handleAnalyticsCategory(cookie);
      },

      onAccept: (savedCookieContent: SavedCookieContent): void => {
        handleAnalyticsCategory(savedCookieContent);
      },

      onChange: (
        cookie: SavedCookieContent,
        changedCookieCategories: string[],
      ): void => {
        if (changedCookieCategories.includes(analyticsCookieCategory)) {
          handleAnalyticsCategory(cookie);
        }
      },

      languages: {
        en: {
          consent_modal: {
            title: '🍪 Our way of improving your experience!',
            description:
              '<p>This website uses essential cookies to ensure its proper functioning and tracking cookies to analyze your interaction with it. The latter are only activated with your consent.</p></br>' +
              '<button type="button" data-cc="c-settings" class="cc-link">Manage your settings!</button>',
            revision_message:
              '<p>Important update: Our Terms and Conditions have changed. Please take a moment to review our updated policies.</p></br>' +
              'Thank you for your understanding 🙂',
            primary_btn: {
              text: 'Accept all',
              role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: 'Deny',
              role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: logo,
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all', // optional, [v.2.5.0 +]
            cookie_table_headers: [
              { name: 'Name' },
              { domain: 'Domain' },
              { expiration: 'Expiration' },
              { description: 'Description' },
            ],
            blocks: [
              {
                title: 'Cookie settings',
                description:
                  'Cookies are used on this website to provide essential functionality and to enhance your browsing experience. You can choose to accept or decline each category at any time.',
              },
              {
                title: 'Essential Cookies',
                description:
                  'Essential cookies are necessary for the proper functioning of our website. Without them, the website would not function effectively.',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true,
                },
              },
              {
                title: 'Analytics Cookies',
                description:
                  'These cookies track your behavior on the website, including the pages you visit and the links you click. All information is anonymous and cannot be used to identify you.',
                toggle: {
                  value: analyticsCookieCategory,
                  enabled: false,
                  readonly: false,
                },
                cookie_table: cookieManager.analyticsCookies.map(cookie => ({
                  ...cookie,
                  expiration: `${cookieExpirationDays} days`,
                })),
              },

              // TODO To uncomment when we have a page for the policy
              /*              {
                title: 'More information',
                description:
                  'For more details relative to cookies and other sensitive data, please read the full <a class="cc-link" href="#yourwebsite">privacy policy</a>.',
              },*/
            ],
          },
        },
      },
    });

    document.getElementById('cc--main')?.classList.add('theme_my');
  }
};
