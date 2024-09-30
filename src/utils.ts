import { ethers } from "npm:ethers@^6.7.0";

export async function getTokenInfo(tokenAddress: string) {
  // Connect to an Ethereum node (e.g., Infura)
  const infura = `https://mainnet.infura.io/v3/${
    Deno.env.get("INFURA_API_KEY")
  }`;
  const provider = new ethers.JsonRpcProvider(infura);

  // ERC20 ABI (Application Binary Interface)
  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
  ];

  // Create a contract instance
  const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

  try {
    // Fetch token information
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const totalSupply = await tokenContract.totalSupply();
    const decimals = await tokenContract.decimals().catch(() => 18);

    return {
      name,
      symbol,
      decimals,
      totalSupply: ethers.formatUnits(totalSupply, decimals),
    };
  } catch (error) {
    console.error("Error fetching token information:", error);
    return null;
  }
}

// Usage example
// const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI token address
//console.log(await getTokenInfo(tokenAddress));


export function fixNumber(num: string): string {
  // Check if the number is in scientific notation
  if (/\d+\.?\d*e[+-]*\d+/i.test(num)) {
    const zero = '0';
    const parts = String(num).toLowerCase().split('e'); // Split into coefficient and exponent
    const e = parseInt(parts[1]); // Parse the exponent

    if (e > 0) {
      // Positive exponent
      return parts[0].replace('.', '').padEnd(e + 1, zero);
    } else {
      // Negative exponent
      return zero.repeat(Math.abs(e)) + parts[0].replace('.', '');
    }
  }

  // If not in scientific notation, return the original number as a string
  return num.toString();
}