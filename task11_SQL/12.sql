SELECT [Username],COUNT([Username]) FROM [Reviews] WHERE [Date] < '2021-09-05 23:59:59.999' AND [Date] > '2021-09-05 00:00:00.000' GROUP BY [Username] 
