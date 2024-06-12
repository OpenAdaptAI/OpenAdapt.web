import React from 'react';
import styles from '@styles/LegalPages.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms of Service</h1>
      <p className={styles.paragraph}>
        By using OpenAdapt, you agree to the following terms and conditions:
      </p>

      <h2 className={styles.subheading}>1. Alpha Software</h2>
      <p className={styles.paragraph}>
        OpenAdapt is currently in an alpha stage of development. This means that the software is still in an early phase of testing and may not be fully optimized for performance, reliability, or functionality. As an alpha user, you acknowledge that the software may have bugs, issues, or limitations that could impact its performance or the quality of the process automation. We continuously work to improve OpenAdapt, but we cannot guarantee a flawless experience or perfect results during the alpha stage.
      </p>

      <h2 className={styles.subheading}>2. Disclaimer of Warranty</h2>
      <p className={styles.paragraph}>
        OpenAdapt records your screen, keyboard, mouse, and optionally microphone inputs, and transforms this data using various algorithms to generate prompts and instructions for AI language models. OpenAdapt does not take responsibility for the performance or quality of the process automation generated by the AI models based on these prompts and instructions. The accuracy and reliability of the process automation depend on the capabilities and limitations of the AI models used, which are subject to change and improvement over time.
      </p>

      <h2 className={styles.subheading}>3. Limitation of Liability</h2>
      <p className={styles.paragraph}>
        To the maximum extent permitted by applicable law, OpenAdapt.AI and MLDSAI Inc. shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from the use of our products and services, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
      </p>

      <h2 className={styles.subheading}>4. Intellectual Property</h2>
      <p className={styles.paragraph}>
        OpenAdapt is an open-source software licensed under the MIT License. You are free to use, modify, and distribute the software in accordance with the terms of the license. However, all intellectual property rights related to OpenAdapt, including trademarks, logos, and brand names, remain the property of MLDSAI Inc.
      </p>

      <h2 className={styles.subheading}>5. Termination</h2>
      <p className={styles.paragraph}>
        We reserve the right to terminate or suspend your access to our products and services at any time, without prior notice or liability, for any reason.
      </p>

      <h2 className={styles.subheading}>6. Governing Law</h2>
      <p className={styles.paragraph}>
        These Terms of Service shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law principles.
      </p>
    </div>
  );
};

export default TermsOfService;
