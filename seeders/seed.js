const faker = require('faker');

INSERT INTO "public"."users"("username", "email", "password", "ip", "isBusiness", "createdAt", "updatedAt") 
VALUES('admin', 'admin@gmail.com', 'password', '192.168.0.104', TRUE, 'now()', 'now()');



INSERT INTO "public"."businesses"("userId", "createdAt", "updatedAt") 
VALUES('60d1d98e-99a6-11e7-b50c-832947445ede', 'now()', 'now()');
