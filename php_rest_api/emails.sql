

CREATE TABLE `emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `emails` (`id`, `email`, `domain`) VALUES
(1, 'rihards.edels@gmail.com', 'gmail'),
(2, 'vilis.kristopans@yahoo.com', 'yahoo'),
(3, 'dainis.porgants@hotmail.com', 'hotmail'),
(4, 'ainars.ansevskis@inbox.lv', 'inbox');