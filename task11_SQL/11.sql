Declare @CurrDate datetime
Declare @PrevDate datetime
SET @CurrDate = GETDATE()
SET @PrevDate = (SELECT TOP 1 [CreatedAt] FROM [Ads] ORDER BY [CreatedAt])
PRINT(DATEDIFF(day,@PrevDate,@CurrDate))