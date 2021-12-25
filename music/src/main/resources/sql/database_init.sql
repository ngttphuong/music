create table "user"(
user_id serial primary key not null,
username varchar(50) not null,
password varchar(255) not null,
gender boolean,
email varchar(255),
avatar varchar(255),
phone_number varchar(50) not null,
address varchar(255)
);
create table album(
album_id serial  not null constraint album_id_pk primary key ,
user_id int not null,
album_name varchar(100),
url_image varchar(255),
 constraint user_id_album_fk  FOREIGN KEY (user_id) references "user"(user_id)
);

create table song(
song_id serial  not null constraint song_id_pk primary key ,
album_id int,
user_id int not null,
song_name varchar(100),
singer_name varchar(50),
url_image varchar(255),
url_link varchar(255),
like_count  varchar(255),
constraint user_id_song_fk FOREIGN KEY (user_id) references "user"(user_id)
)
create table comment(
comment_id serial  not null constraint comment_id_pk primary key ,
song_id int not null,
user_id int not null,
message varchar(255),
constraint song_id_comment_fk FOREIGN KEY (song_id) references song(song_id),
constraint user_id_comment_fk FOREIGN KEY (user_id) references "user"(user_id)
)

