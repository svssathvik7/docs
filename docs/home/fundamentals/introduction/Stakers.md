---
id: stakers
---

# Stakers

Staking is the entry point for interested people into Garden protocol, ensuring its decentralisation, efficiency, and accountability. By staking **SEED tokens**, stakers get to vote for [solvers](Solvers.md) they trust to execute intents reliably and earn rewards based on their performance. This system incentivizes long-term [commitment](https://dune.com/garden_finance/gardenfinance#stake-your-seed), balances solver selection, and helps maintain the protocol’s fairness and reliability.&#x20;

## How does it work?

1. Anyone holding a minimum of 2100 SEED tokens is eligible to [stake](https://app.garden.finance/stake/). Staking has to be done in multiples of 2100 SEED. Stakers deposit **SEED tokens** into the protocol, locking them for a chosen duration. Longer lock periods result in a higher staking multiplier, increasing both votes and potential rewards. Follow this tutorial for a step-by-step breakdown of staking.

<figure><img src="/assets/staking.png" alt=""/><figcaption></figcaption></figure>

2. Stakers allocate their votes to specific solvers based on performance metrics and projected APY. A solver’s ability to process intents is proportional to the votes they receive.
3. Stakers earn a share of solver fees based on their voting weight. Staking rewards are distributed on a weekly basis in **Bitcoin**. The staking multiplier ensures that longer commitments lead to higher APY, encouraging stability in the protocol.
4. If a solver fails or behaves maliciously, the stakers who voted them face a minor penalty, ensuring accountability and improving solver reliability over time.

## Why are stakers important?

Stakers are not necessarily a passive actor in Garden protocol, they are incentivised to:

* Maintain accountability among solvers because stakers would only vote for solvers who settle all their assigned intents (complete rate) without downtime (speed).
* Remove solver monopoly as staker rewards are adjusted by the voting concentration of a particular solver. Stakers seeking higher returns are incentivized to distribute their votes across underrepresented solvers, ensuring a balanced and fair ecosystem.
* Phase out solvers who are old and not functional, as stakers weekly rewards are tied to the solver's volume. If the solver is not functioning, the stakes doesnt get any rewards and will change their vote to an active solver.