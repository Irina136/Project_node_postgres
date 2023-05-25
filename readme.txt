создание бэкэнда с помощью Node.js и Express


Таблица


CREATE TABLE public.merchants (
  id SERIAL,
  name1 VARCHAR(30),
  name2 VARCHAR(30)
) ;

ALTER TABLE public.merchants
  OWNER TO my_user;