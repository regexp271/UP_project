DROP DATABASE ProfitDB;
CREATE DATABASE ProfitDB;

DROP TABLE [Ads]
CREATE TABLE [Ads] (
  [Id] nvarchar(30) PRIMARY KEY NOT NULL,
  [Description] nvarchar(200) NOT NULL,
  [CreatedAt] datetime,
  [Link] nvarchar(200) NOT NULL,
  [Vendor] nvarchar(200) NOT NULL,
  [PhotoLink] nvarchar(200) NULL,
  [Discount] nvarchar(30) NOT NULL,
  [ValidUntil] datetime,
  [Rating] FLOAT(2) NULL,
);

DROP TABLE [Reviews]
CREATE TABLE [Reviews] (
  [AdsId] nvarchar(30) NOT NULL REFERENCES [Ads] (Id),
  [Username] nvarchar(200) NOT NULL,
  [Rating] INT NOT NULL,
  [Text] nvarchar(200) NULL,
  [Date] datetime,
);	

DROP TABLE [HashTags]
CREATE TABLE [HashTags] (
  [AdsId] nvarchar(30) NOT NULL REFERENCES [Ads] (Id),
  [HashTag] nvarchar(200) NOT NULL
);	


DELETE FROM [Ads]
INSERT INTO  [Ads] ([Id],[Description],[CreatedAt],[Link],[Vendor],[PhotoLink],[Discount],[ValidUntil],[Rating]) VALUES 
('1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-01-03 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','5'),
('2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-01-03 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','0'),
('3','150dots: ......................................................................................................................................................','2021-01-03 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','2'),
('4','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-12-05 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','0'),
('5','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-12-05 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','0'),

('6','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-07-05 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','0'),
('7','150dots: ......................................................................................................................................................','2021-09-05 12:00:00.000','https://azure.microsoft.com/','Microsoft Azure','pic.png','12','2021-01-06 12:00:00.000','2.5'),
('8','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-12-05 12:00:00.000','https://www.digitalocean.com/','Digital Ocean','pic.png','12','2021-01-06 12:00:00.000','0'),
('9','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-12-05 12:00:00.000','https://www.digitalocean.com/','Digital Ocean','pic.png','12','2021-01-06 12:00:00.000','0'),
('10','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-12-05 12:00:00.000','https://www.digitalocean.com/','Digital Ocean','pic.png','12','2021-01-05 12:00:00.000','0'),

('11','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-10-05 12:00:00.000','https://www.digitalocean.com/','Digital Ocean','pic.png','12','2021-01-05 12:00:00.000','0'),
('12','150dots: ......................................................................................................................................................','2021-19-05 12:00:00.000','https://aws.amazon.com/','Amazon Web Services','pic.png','12','2021-01-06 12:00:00.000','3.5'),
('13','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-20-05 12:00:00.000','https://aws.amazon.com/','Amazon Web Services','pic.png','12','2021-01-06 12:00:00.000','0'),
('14','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-21-05 12:00:00.000','https://aws.amazon.com/','Amazon Web Services','pic.png','12','2021-01-06 12:00:00.000','0'),
('15','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-22-05 12:00:00.000','https://aws.amazon.com/','Amazon Web Services','pic.png','12','2021-01-06 12:00:00.000','0')

DELETE FROM [Reviews]
INSERT INTO  [Reviews] ([AdsId],[Username],[Rating],[Text],[Date]) VALUES 
('1','user1','5','Very Cool!!!','2021-09-05 12:00:00.000'),
('3','user1','2','Not So Cool...','2021-09-05 12:00:00.000'),
('7','user1','1','Very Bad','2021-09-05 12:00:00.000'),
('7','user2','2','Bad','2021-09-05 12:00:00.000'),
('7','user3','3','Ok','2021-09-05 12:00:00.000'),
('7','user4','4','Good','2021-10-05 12:00:00.000'),
('12','user1','2','Very Bad','2021-09-05 12:00:00.000'),
('12','user2','3','Bad','2021-09-05 12:00:00.000'),
('12','user3','4','Ok','2021-10-05 12:00:00.000'),
('12','user4','5','Good','2021-10-05 12:00:00.000')

DELETE FROM [HashTags]
INSERT INTO  [HashTags] ([AdsId],[HashTag]) VALUES
('1','hashtag1'),
('1','hashtag2'),
('2','hashtag1'),
('2','hashtag2'),
('3','hashtag1'),
('3','hashtag2'),
('4','hashtag1'),
('4','hashtag2'),
('5','hashtag1'),
('5','hashtag2'),
('6','hashtag1'),
('6','hashtag2'),
('7','hashtag1'),
('7','hashtag2'),
('8','hashtag1'),
('8','hashtag2'),
('9','hashtag1'),
('9','hashtag2'),
('10','hashtag1'),
('10','hashtag2'),
('11','hashtag1'),
('11','hashtag2'),
('12','hashtag1'),
('12','hashtag2'),
('13','hashtag1'),
('13','hashtag2'),
('14','hashtag1'),
('14','hashtag2'),
('15','hashtag1'),
('15','hashtag2')