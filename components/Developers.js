import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faApple} from '@fortawesome/free-brands-svg-icons';

import styles from './Developers.module.css';

export default function Developers() {
  return (
        <div className={ styles.row } id="developers">
            <div className="relative flex items-center justify-center mx-20 md-12">
                <div className="grid grid-cols-1 break-words">
                    <h2 id="start" className="text-2xl mt-10 mb-5 font-light">Getting Started</h2>
                    <h3 className="my-3">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="text-3xl mr-4" />
                        <b>Coming soon!</b>
                    </h3>
                    <p>
                        Please <a href="#register">Register for Updates</a> and <a href="#waitlist">Join the Waitlist</a>.
                    </p>
                    <p>
                        Comfortable on the command line? Read on:
                    </p>
                    <h2 id="start" className="text-2xl mt-10 font-light mb-5">Getting Started for Developers</h2>
                    <p>
                        Note: If you run into trouble with the scripted installation
                        described here, please refer to <a href="https://github.com/OpenAdaptAI/OpenAdapt?tab=readme-ov-file#manual-setup">Manual Setup</a> instructions.
                    </p>
                    <h3 className="my-3">
                        <FontAwesomeIcon icon={faWindows} className="text-3xl mr-4" />
                        <b>Windows</b>
                    </h3>
                    <ul className="mt-2 list-disc list-inside font-light">
                        <li>Press Windows Key, type "powershell", and press Enter</li>
                        <li>Copy and paste the following command into the terminal, and press Enter (If Prompted for `User Account Control`, click 'Yes'):</li>
                    </ul>
                    <pre className="whitespace-pre-wrap code text-slate-600 bg-slate-100 p-3 m-2" style={{backgroundColor: '#f8f6ff'}}>
                       Start-Process powershell -Verb RunAs -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', "iwr -UseBasicParsing -Uri 'https://raw.githubusercontent.com/OpenAdaptAI/OpenAdapt/main/install/install_openadapt.ps1' | Invoke-Expression"
                    </pre>
                    <h3 className="my-3">
                        <FontAwesomeIcon icon={faApple} className="text-3xl mr-4" />
                        <b>MacOS</b>
                    </h3>
                    <ul className="mt-2 list-disc list-inside font-light">
                        <li>Press Command+Space, type "terminal", and press Enter</li>
                        <li>Copy and paste the following command into the terminal, and press Enter:</li>
                    </ul>
                    <pre className="whitespace-pre-wrap code text-slate-600 bg-slate-100 p-3 m-2" style={{backgroundColor: '#f8f6ff'}}>
                        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/OpenAdaptAI/OpenAdapt/HEAD/install/install_openadapt.sh)"
                    </pre>
                    <h2 className="text-2xl mt-10 font-light">What's Next?</h2>
                    <ul className={`${styles.noBullets} mt-2 font-light`}>
                    <li className="mt-2 font-light">
                        <a
                            className="font-medium hover:underline"
                            href="https://discord.gg/yF527cQbDG"
                            style={{color: "#FFF", backgroundColor: '#560DF8', padding: '10px', display: 'inline-block', margin: '5px'}}
                        >
                        Join our Discord
                        </a>
                    </li>
                    <li className="mt-2 font-light">
                        <a
                            className="font-medium hover:underline"
                            href="https://github.com/OpenAdaptAI/OpenAdapt#usage"
                            style={{color: "#FFF", backgroundColor: '#560DF8', padding: '10px', display: 'inline-block', margin: '5px'}}
                        >
                            Read our Usage Instructions on Github
                        </a>
                    </li>
                    <li className="mt-2 font-light">
                        <a
                            className="font-medium hover:underline"
                            href="https://openadapt.gitbook.io/openadapt.ai/"
                            style={{color: "#FFF", backgroundColor: '#560DF8', padding: '10px', display: 'inline-block', margin: '5px'}}
                        >
                        Read our Documentation on Gitbook
                        </a>
                    </li>
                    </ul>
                    <h2 className="text-2xl mt-10 font-light">Troubleshooting</h2>
                    <ul className={`${styles.noBullets} mt-2 font-light`}>
                    <li className="mt-2 font-light">
                        <a
                            className="font-medium hover:underline"
                            href="https://github.com/OpenAdaptAI/OpenAdapt/issues/new/choose"
                            style={{color: "#FFF", backgroundColor: '#560DF8', padding: '10px', display: 'inline-block', margin: '5px'}}
                        >
                            Please submit a Github Issue 🙏
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
      </div>
  );
}
