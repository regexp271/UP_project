SELECT [Vendor] FROM [Ads] WHERE [ValidUntil] > GETDATE() GROUP BY [Vendor] HAVING COUNT([Vendor]) > 3 
