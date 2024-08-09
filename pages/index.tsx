"use client";
import styles from "./index.module.css";
import { Blockfrost, Lucid, WalletApi } from "@lucid-evolution/lucid";

const BLOCKFROST_URL = "https://cardano-preview.blockfrost.io/api/v0";
const BLOCKFROST_PROJECT = "previewhS7QyZaVPFNhEssfo0l6MxbcvbnM8BKw";
const BROWSER_WALLET_TO_USE = "eternl";

export default function Home() {
  async function handleConnectWallet() {
    try {
      const blockfrost = new Blockfrost(BLOCKFROST_URL, BLOCKFROST_PROJECT);
      const lucidEvolution = await Lucid(blockfrost, "Preprod");

      const wallet = await window?.cardano[BROWSER_WALLET_TO_USE]?.enable();
      lucidEvolution.selectWallet.fromAPI(wallet as WalletApi);

      console.log(
        `Wallet connected (${BROWSER_WALLET_TO_USE}) and Lucid initialized successfully.`
      );
    } catch (error) {
      console.error(
        `Failed to connect ${BROWSER_WALLET_TO_USE} wallet or initialize Lucid:`,
        error
      );
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <span className={styles.lucidEvolution}>LUCID EVOLUTION</span> |{" "}
        <span className={styles.nextJs}>NEXTJS</span>
      </div>
      <div className={styles.description}>
        <p>
          INITIALIZE{" "}
          <span>LUCID EVOLUTION</span>
          {" "}USING <span className={styles.blockfrost}>BLOCKFROST</span>
        </p>
      </div>
      <div className={styles.button} onClick={handleConnectWallet}>
        CONNECT {BROWSER_WALLET_TO_USE.toUpperCase()} WALLET
      </div>
    </main>
  );
}
