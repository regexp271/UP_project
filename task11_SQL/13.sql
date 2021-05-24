SELECT [Vendor] FROM [Ads] WHERE DATEDIFF(day,[CreatedAt],GETDATE()) < 10 GROUP BY [Vendor] HAVING COUNT([Vendor]) > 3 
