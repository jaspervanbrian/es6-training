class StrategyPattern
{
	handle()
	{
		alert("Testing handle on strategy.");
	}
}

export function log(strategy)
{
	strategy.handle();
}

export default StrategyPattern;
