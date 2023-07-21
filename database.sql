create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
);
create TABLE times(
    id SERIAL PRIMARY KEY,
    color VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

Создание недель в месяце
INSERT INTO week (total_profit, month_id)
VALUES (0, 1),
       (0, 1),
       (0, 1),
       (0, 1),
       (0, 1),
       (0, 1);

insert into work (date_time,user_id,times_id)
values ('2018-02-28 00:00:00.000', 2, 1)