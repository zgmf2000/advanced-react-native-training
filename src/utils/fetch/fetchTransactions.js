export async function fetchTransactionList() {
  const result = await fetch('https://advanced-react-training.now.sh/transactions');
  return result.json();
}
