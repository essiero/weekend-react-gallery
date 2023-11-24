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
  ('images/IMG_0200.jpg', 'Catedral de Santiago', 'Essie and friend at the Catedral de Santiago de Compostela'),
  ('images/IMG_0202.jpg', 'Procession of the Pasta Salad', 'A grand, bagpipe-accompanied procession for the pasta salad'),
  ('images/IMG_0203.jpg', 'Fonsagrada Fest', 'A group of people posing and smiling with a poster that says "Fonsagrada Fest"'),
  ('images/IMG_0204.jpg', 'Ribeira do Douro', 'A landscape shot of a river and vineyards lining the slopes on either side of it'),
  ('images/IMG_0206.jpg', 'Noah in the Arch', 'A man standing below a natural stone arch on a beach'),
  ('images/IMG_0209.jpg', 'Ortigueira', 'A collection of tents and people lounging in a pine grove'),
  ('images/IMG_0210.jpg', 'Mascarada Ibérica', 'A person dressed in a wooden mask with horns and a costume made of straw'),
  ('images/IMG_0211.jpg', 'Ourense overview', 'A woman walks along a country lane looking over the city below'),
  ('images/IMG_0212.jpg', 'Lagos de Covadonga', 'A lake nestled between two snowy mountains'),
  ('images/IMG_0213.jpg', 'Playa Samil', 'Five people, standing chest-deep in the turquoise ocean, pose and smile with their arms in the air'),
  ('images/IMG_0214.jpg', 'Rafa and Nana', 'A grandma walks with her toddler grandson along the edge of a pond'),
  ('images/IMG_0215.jpg', 'Letchworth State Park', 'A person perches and smiles on a bridge in a river canyon'),
  ('images/IMG_0216.jpg', 'Feliz Cumple Papá y Eva', 'A father holds his one-year-old to blow out birthday candles'),
  ('images/IMG_0217.jpg', 'A toast to Hupper Island', 'A man pours champagne into glasses, overlooking an ocean sunset'),
  ('images/IMG_0218.jpg', 'Sophie and Ori', 'Two people smiling and laughing at a picnic table'),
  ('images/IMG_0219.jpg', 'River concert', 'A trio of musicians play to a sitting crowd along a riverbank'),
  ('images/IMG_0220.jpg', 'Turning 30', 'A smattering of birthday guests in party hats');












  