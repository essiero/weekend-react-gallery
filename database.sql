CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  ('images/IMG_0200.jpg', 'Catedral de Santiago', 'Essie and friend at the Catedral de Santiago de Compostela');
  ('images/IMG_0202.jpg', 'Procession of the Pasta Salad', 'A grand, bagpipe-accompanied procession for the pasta salad');
  ('images/IMG_0203.jpg', 'Fonsagrada Fest', 'A group of people posing and smiling with a poster that says "Fonsagrada Fest"');
  