SELECT [AdsId] FROM [Ads] 
JOIN [Reviews] ON [Ads].Id = [Reviews].AdsId GROUP BY [AdsId] HAVING COUNT([AdsId]) > 3