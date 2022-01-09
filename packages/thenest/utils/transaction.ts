import {
  ConfirmedSignatureInfo,
  ParsedConfirmedTransaction,
} from "@solana/web3.js";

export const batchTransactions = (
  sigs: ConfirmedSignatureInfo[],
  batchSize: number = 100
): ConfirmedSignatureInfo[][] => {
  return new Array(Math.ceil(sigs.length / batchSize))
    .fill(0)
    .reduce(
      (prev, _, idx) => [
        ...prev,
        sigs.slice(idx * batchSize, (idx + 1) * batchSize),
      ],
      []
    );
};

export const calculateTxChange = (tx: ParsedConfirmedTransaction) => {
  if (!tx) {
    return;
  }
  const {
    meta: { postTokenBalances, preTokenBalances },
    blockTime,
  } = tx;

  return {
    ...tx,
    timestamp: new Date(blockTime * 1000),
    balances: postTokenBalances.map((postTx) => ({
      ...postTx,
      change:
        postTx.uiTokenAmount.uiAmount -
          preTokenBalances.find(
            (preTx) => preTx.accountIndex === postTx.accountIndex
          )?.uiTokenAmount.uiAmount ?? 0,
    })),
  };
};
