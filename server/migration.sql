DROP TABLE IF EXISTS hairstyles;
DROP TABLE IF EXISTS appointment;

CREATE TABLE hairstyles (
    id SERIAL,
    name TEXT,
    price INT,
    description TEXT,
    hair_needed BOOLEAN,
);

CREATE TABLE appointment (
    id SERIAL, 
    hairstyles_id INT,
    client TEXT,
    notes TEXT,
    phone_number INT,
    hair_option
);

INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Crochet', 100, 'Crocheting hair extensions to client s braided hair.', TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Soft Locs', 120, `Type of faux locs that use crochet locs hair and afro kinky (distressed) wrapping hair at the roots.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Natural Hair Any Style', 50, `Any hair style done with the clients natural hair.`, FALSE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Goddess Soft Locs', 50, `Form of faux locs with a more bohemian styling.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Braided Ponytail', 80, `Braided hairstyles that are worn in a ponytail.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Knotless Braids-SMALL', 180, `Where the braid is started off with small parts in your hair and then you feed the extension through as you go along, creating a knotless look.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Knotless Braids-MEDIUM', 120, `Where the braid is started off with medium parts in your hair and then you feed the extension through as you go along, creating a knotless look.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Knotless Braids-LARGE', 100, `Where the braid is started off with large parts in your hair and then you feed the extension through as you go along, creating a knotless look.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Feed in Braids', 65, `Cornrows done with extensions that are installed in a seamless way.`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Butterfly Locs', 120, `A variant of faux locs achieved using the crotchet method where wavy hair is looped into a braid using a crotchet needle and then loosely wrapped to give it a distressed/unraveled look..`, TRUE);
-- INSERT INTO hairstyles (name, price, description, hair_needed) VALUES ('Ponytail', 50, `Hair is drawn back and tied at the back of the head, with extentions designed to add thickness and length to your ponytail.`, TRUE);



-- const hairstyles = [
--     {
--         id: 1,
--         name: "crochet",
--         price: 100,
--         description: "Crocheting hair extensions to client's braided hair.",
--         hairNeeded: true
--     },
--     {
--         id: 2,
--         name: "soft locs",
--         price: 120,
--         description: "Type of faux locs that use crochet locs hair and afro kinky (distressed) wrapping hair at the roots.",
--         hairNeeded: true
--     },
--     {
--         id: 3,
--         name: "natural hair any style",
--         price: 50,
--         description: "Any hair style done with the clients natural hair.",
--         hairNeeded: false
--       }
-- ];