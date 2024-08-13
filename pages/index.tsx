"use client";
import { useState } from "react";
import styles from "./index.module.css";
import {
  Assets,
  Blockfrost,
  Lucid,
  Wallet,
  WalletApi,
} from "@lucid-evolution/lucid";

const BLOCKFROST_URL = "https://cardano-preview.blockfrost.io/api/v0";
const BLOCKFROST_PROJECT = "previewhS7QyZaVPFNhEssfo0l6MxbcvbnM8BKw";
const BROWSER_WALLET_TO_USE = "eternl";

export default function Home() {
  const [connectedWallet, setConnectedWallet] = useState<Wallet | undefined>(
    undefined
  );

  async function handleConnectWallet() {
    try {
      const blockfrost = new Blockfrost(BLOCKFROST_URL, BLOCKFROST_PROJECT);
      const lucidEvolution = await Lucid(blockfrost, "Preview");

      const wallet = await window?.cardano[BROWSER_WALLET_TO_USE]?.enable();
      lucidEvolution.selectWallet.fromAPI(wallet as WalletApi);
      let connected = lucidEvolution.wallet();
      setConnectedWallet(connected);
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

  async function handleSendAdaToSelf() {
    try {
      const blockfrost = new Blockfrost(BLOCKFROST_URL, BLOCKFROST_PROJECT);
      const lucidEvolution = await Lucid(blockfrost, "Preview");
      const wallet = await window?.cardano[BROWSER_WALLET_TO_USE]?.enable();
      lucidEvolution.selectWallet.fromAPI(wallet as WalletApi);
      let connected = lucidEvolution.wallet();
      if (connected) {
        let assets: Assets = { lovelace: 10000000n };
        let address = await connected.address();

        let txBuilder = lucidEvolution.newTx().pay.ToAddress(address, assets);
        let signBuilder = await txBuilder.complete();

        let signed = await signBuilder.sign.withWallet().complete();
        let submittedTxHash = await signed.submit();
        if (submittedTxHash) {
          alert(`submitted tx!: ${submittedTxHash}`);
        }
      }
    } catch (error) {
      console.error(`Failed to send ada to self:`, error);
    }
  }

  async function handleSendAdaToBasket() {
    try {
      const blockfrost = new Blockfrost(BLOCKFROST_URL, BLOCKFROST_PROJECT);
      const lucidEvolution = await Lucid(blockfrost, "Preview");

      if (connectedWallet) {
        let assets: Assets = { lovelace: 10000000n };
        let address = await connectedWallet.address();

        // let txBuilder = lucidEvolution.newTx().pay.ToAddress(address, assets);
        // let signBuilder = await txBuilder.complete();

        // let signed = await signBuilder.sign.withWallet().complete();
        // let submittedTxHash = await signed.submit();
        // if (submittedTxHash) {
        //   alert(`submitted tx!: ${submittedTxHash}`);
        // }
      }
    } catch (error) {
      console.error(`Failed to send ada to self:`, error);
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
          INITIALIZE <span>LUCID EVOLUTION</span> USING{" "}
          <span className={styles.blockfrost}>BLOCKFROST</span>
        </p>
      </div>
      <div
        className={styles.button}
        onClick={handleConnectWallet}
        style={{
          opacity: connectedWallet ? 0.5 : 1,
          pointerEvents: connectedWallet ? "none" : "auto",
          cursor: connectedWallet ? "none" : "pointer",
        }}
      >
        {connectedWallet
          ? "CONNECTED"
          : `CONNECT ${BROWSER_WALLET_TO_USE.toUpperCase()} WALLET`}
      </div>
      <div className={styles.button} onClick={handleSendAdaToSelf}>
        SEND ADA TO SELF
      </div>
      <div className={styles.button} onClick={handleSendAdaToBasket}>
        SEND ADA TO BASKET
      </div>
    </main>
  );
}
