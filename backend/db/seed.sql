-- DROP DATABASE IF EXISTS furever_home;
-- CREATE DATABASE furever_home;
--
-- \c furever_home;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  username VARCHAR,
  name VARCHAR,
  about TEXT,
  profile_picture VARCHAR
);

CREATE TABLE location(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  zip_code INT NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  pet_type VARCHAR NOT NULL,
  post_body TEXT NOT NULL,
  post_url VARCHAR
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  comment_body TEXT NOT NULL
);

CREATE TABLE favorited(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  pet_id INT
);

CREATE TABLE adopted(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  pet_id INT
);

CREATE TABLE forms(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday TEXT NOT NULL,
  address TEXT NOT NULL,
  apt TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip INT NOT NULL,
  phone INT NOT NULL,
  email TEXT NOT NULL,
  home_type VARCHAR(9) NOT NULL CHECK (home_type IN('Home', 'Apartment')),
  home_yard BOOLEAN NOT NULL,
  home_screen BOOLEAN NOT NULL,
  home_allergic BOOLEAN NOT NULL,
  home_fixed BOOLEAN NOT NULL,
  references_name TEXT NOT NULL,
  references_relationship TEXT NOT NULL,
  references_phone INT NOT NULL,
  relationship_length TEXT NOT NULL
);

INSERT INTO users(email, password_digest, username, name, about, profile_picture) VALUES ('corey@fh.com', '$2a$10$8THnskuIHgA4epxiwUN2GOkwfwOQU8/Jx8lzU8UZIbgB8ZM7Mi/hS', 'coreysky', 'corey', 'Hi my name is Corey and my wife and I are newlyweds. We just bought a new house and though we not ready for kids, we were looking for a new furr baby to join our home. We heard about Furever Home from a friend and that is how we found our baby Hachiko. We also have another dog Riri who we also rescued from a shelter. We are passionate about animal care and are hardcore animal lovers.', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5ba3b34d40ec9aa75455d0f8/1537454929714/corey.jpg'),
('reed@fh.com', '$2a$10$8THnskuIHgA4epxiwUN2GOkwfwOQU8/Jx8lzU8UZIbgB8ZM7Mi/hS', 'crymall', 'reed', 'Hi my name is Reed and I’m proud to be from from Williamsburg, Brooklyn and I’m happily married to my partner Jasmine.  We have have two fur babies named Jon-E and Andrew. They were both adopted from the ASPCA Adoption Center. We joined Forever Home because We are passionate about animal and animal care. I am a vegetarian and I would love to get to know more people from the NYC area who are interested in doing volunteer work at local animals shelters and rescues.', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5ba3e881e2c483e249c2fc6f/1537468549988/reed.jpg'),
('jasmine@fh.com', '$2a$10$8THnskuIHgA4epxiwUN2GOkwfwOQU8/Jx8lzU8UZIbgB8ZM7Mi/hS', 'jazzy', 'jasmine', 'Hi my name is Jasmine I’m from Williamsburg, Brooklyn and I’m happily married to my partner Reed.  We have have two fur babies named Jon-E and Andrew. They were both adopted from the ASPCA Adoption Center. I joined Forever Home because I’m passionate about animal and animal care. I am a vegetarian and I would love to get to know more people from the NYC area who are interested in doing volunteer work at local animals shelters and rescues.  ', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5ba3f78b085229fe3856a8db/1537472398928/jasmine.jpg'),
('rey@fh.com', '$2a$10$8THnskuIHgA4epxiwUN2GOkwfwOQU8/Jx8lzU8UZIbgB8ZM7Mi/hS', 'reymundo', 'ray', 'Hi my name is Reymundo I’m from Washington Heights where I live with my beautiful family. I joined Forever Home because I’m passionate about animal and animal care. I have one beautiful kitten named Joy. They were both adopted from the ASPCA Adoption Center. I am a vegetarian and I would love to get to know more people from the NYC area who are interested in doing volunteer work at local animals shelters and rescues. ', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5ba3f9334192028eb6004cbd/1537472823327/rey.jpg');

INSERT INTO location(user_id, city, state, zip_code) VALUES (1, 'Brooklyn', 'NY', 11237), (2, 'Queens', 'NY', 11416), (3, 'New York City', 'NY', 10001), (4, 'Bronx', 'NY', 10467);

INSERT INTO posts(user_id, title, pet_type, post_body, post_url) VALUES (1, 'Cat Care Pointers', 'Cat', '-Handling: To pick up your cat, place one hand behind the front legs and another under the hindquarters. Lift gently. Never pick up a cat by the scruff of the neck (behind the ears) or by the front legs without supporting the rear end. -Play: Cats delight in stalking imaginary prey. The best toys are those that can be made to jump and dance around and look alive. Your cat will act out her predator role by pouncing on toys instead of people’s ankles. Don’t use your hands or fingers as play objects with kittens. This type of play may cause a biting and scratching problem to develop as your kitten matures. -Claws: Cats needs to scratch. When a cat scratches, the old outer nail sheath is pulled off and the sharp smooth claws underneath are exposed. Cutting your cat’s nails every 2 to 3 weeks will keep the nails relatively blunt and less likely to harm the arms of both humans and furniture.', 'https://www.petmd.com/sites/default/files/petmd-appreciate-cat.jpg'),
(2, 'Feeding your cat', 'Cat', 'An adult cat should be fed one large or two smaller meals each day. Kittens from 6 to 12 weeks need to be fed four times a day. Kittens from three to six months need to be fed three times a day. You can either feed specific meals, throwing away any leftover canned food after 30 minutes or free-feed dry food (keeping food out all the time). Feed your cat a high-quality, brand-name kitten or cat food (avoid generic brands) two to three times a day. Kittens can be fed human baby food for a short time if they won’t eat kitten food softened by soaking in warm water. Use turkey or chicken baby food made for children six months and older. Gradually mix with cat food. Cow’s milk is not necessary and can cause diarrhea in kittens and cats. Provide fresh, clean water at all times. Wash and refill water bowls daily.', 'https://www.catster.com/wp-content/uploads/2017/11/A-brown-tabby-cat-eating-a-bowl-of-dry-food.jpg'),
(3, 'Tips You Should Know Before Adopting', 'Dog', '1) Make sure your family’s wallet can handle it!: Dogs require a lot of care that can quickly add up to big bucks. When you’re responsible for a dog, you need to spend money on regular and emergency vet visits (just like humans, dogs can have medical emergencies!), bedding, a collar and harness, high-quality dog food, treats, toys, grooming … the list goes on.  2) NEVER leave your dog chained up outdoors …: It’s hard to imagine that anyone could ever leave their dog all alone outside to suffer, especially in bad weather, but unfortunately some do. It’s cruel and dangerous. If you know anyone who does this, speak up! Have your parents call animal control or local authorities. 3) Dog tags and microchipping are a must!: Accidents happen and you never know if and when your dog will get lost or run away. If you couldn’t find your way back home, you’d be able to call someone for help, but that’s not the case with dogs. Get a collar with proper tags that have your dog’s name and at least two phone numbers for you or your family. Microchipping (a simple procedure that the vet can do) is another great way to make sure your dog gets back home again! If you move, make sure you update the tags and give the microchip company your new information. Ask your parents to talk to your dog’s vet for more information.', 'https://www.petmd.com/sites/default/files/newfoundland-dog-at-home-is-laid-out-on-the-sofa-picture-id918342022%20(1).jpg'),
(4, 'First Days of Bringing a Dog Home', 'Dog', 'We know moving is stressful — and your new dog feels the same way! Give him time to acclimate to your home and family before introducing him to strangers. Make sure children know how to approach the dog without overwhelming him. Go here for more on introducing dogs and children. When you pick up your dog, remember to ask what and when he was fed. Replicate that schedule for at least the first few days to avoid gastric distress. If you wish to switch to a different brand, do so over a period of about a week by adding one part new food to three parts of the old for several days; then switch to half new food, half old, and then one part old to three parts new. For more information about your dog’s diet, check out our section on Dog Nutrition. On the way home, your dog should be safely secured, preferably in a crate. Some dogs find car trips stressful, so having him in a safe place will make the trip home easier on him and you. Once home, take him to his toileting area immediately and spend a good amount of time with him so he will get used to the area and relieve himself. Even if your dog does relieve himself during this time, be prepared for accidents. Coming into a new home with new people, new smells and new sounds can throw even the most housebroken dog off-track, so be ready just in case. Need more housetraining tips? Check out our Dog Housetraining section. If you plan on crate training your dog, leave the crate open so that he can go in whenever he feels like it in case he gets overwhelmed. Also, be sure to check out the do’s and don’ts of crate training your dog. From there, start your schedule of feeding, toileting and play/exercise. From Day One, your dog will need family time and brief periods of solitary confinement. Don’t give in and comfort him if he whines when left alone. Instead, give him attention for good behavior, such as chewing on a toy or resting quietly (Source: Preparing Your Home For A New Dog). For the first few days, remain calm and quiet around your dog, limiting too much excitement (such as the dog park or neighborhood children). Not only will this allow your dog to settle in easier, it will give you more one-on-one time to get to know him and his likes/dislikes. If he came from another home, objects like leashes, hands, rolled up newspapers and magazines, feet, chairs and sticks are just some of the pieces of “training equipment” that may have been used on this dog. Words like “come here” and “lie down” may bring forth a reaction other than the one you expect.Or maybe he led a sheltered life and was never socialized to children or sidewalk activity. This dog may be the product of a never-ending series of scrambled communications and unreal expectations that will require patience on your part.', 'https://www.petmd.com/sites/default/files/petMD_Dog-Communication-2.jpg'),
(1, 'Welcoming Your Cat To Its New Home', 'Cat', 'Go slowly at first. A new cat may need seven to fourteen days to relax into her new environment. Save meet-and-greets with friends, neighbors and relatives until the cat is eating and eliminating on a normal schedule. Offer her a safe place to hide while she gets her bearings. She’ll appreciate the chance to observe her new family’s routine from a small, dark space or one high above the action. Bring your new feline to a caring veterinarian for a wellness exam within one week after adoption. Provide the same diet she had at the shelter at least for the first week or two. If you wish to switch to a different flavor or brand, slowly make the switch over one to two weeks, starting with a quarter ration of the new food mixed into the old favorite. From there, up the ratio of new to old about 10% each day. Set up a litter box in a quiet, low-traffic area. Unsure of what litter to use? The majority of cats prefer fine grain clumping litter. Try that first unless the new adoptee is so young that she is in the litter-eating stage. Non-clumping litter is recommended for kittens under ten weeks of age. Cats must scratch, so make sure to provide yours with a sturdy, rough-textured scratching post to save wear and tear on furniture. Cat manicures every ten to fourteen days also help reduce damage. Cat-proof your home before giving your new feline run of the house. Put away harsh cleaning products, human medications and household poisons. Re-home any poisonous houseplants. And if the newcomer is a kitten, lock away any breakables and remember to keep the toilet lid down. Once settled in, a young cat or kitten will be eager to play. Stock up on interactive toys such as feather wands and kitty fishing poles to engage attention and direct energies toward a positive pursuit. Ready a comfortable cat perch on a sunny window sill – if it overlooks the birdfeeder, all the better! Observing live birds and squirrels beats out kitty videos any day.', 'https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2011/Photographing-Cats/Media/Mike-Earley-Cat-Profile.jpg'),
(2, 'Obedience is key', 'Dog', 'You should also establish clear rules and expectations from the get-go.Be firm and gentle with your training — never punitive. Be consistent with your rules. Give commands in a matter-of-fact tone. Always reward your puppy for obeying you with plenty of praise, as well as an occasional treat. When it’s time to move on to house-training, the key is to be consistent. Your puppy will typically need to eliminate 20 to 30 minutes after eating. Take him outside, and use a command such as “go potty.” Then be sure to praise him when he does. Don’t get discouraged if your puppy doesn’t learn the rules right away. Some pets catch onto housebreaking quickly, while others can take up to six months. Remember that with proper puppy care, your new pet will grow into a happy, healthy dog — and provide you with love and companionship for years to come.', 'https://www.petmd.com/sites/default/files/golden-retriever-dog-peeing-in-house-shutterstock_237584218.jpg'),
(3, 'Helping Your Cat Adjust', 'Cat', 'Cats are territorial, and coming into a new home leaves them feeling really uneasy. There’s all that unexplored space, and who knows what may lurk there. Do him a favor and provide a small area to call his own for the first few days or weeks. A bathroom or laundry room works well. Furnish the room with cat amenities, such as food, water and a litter box. You’ll want to spend time with your cat, so make sure there’s a comfortable place for you to sit as well.', 'https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2011/Photographing-Cats/Media/Jamie-Horton-cats-tabby-sleeping.jpg'),
(4, 'Get On The Right Paw', 'Dog', 'When you pick up your pup, remember to ask what and when he was fed. Replicate that schedule for at least the first few days to avoid gastric distress. If you wish to switch to a different brand, do so over a period of about a week by adding one part new brand to three parts of the old for several days; then switch to equal parts; and then one part old to three parts new. From the start, consistency is important. On the way home, Puppers should ride in the back seat, either in one person’s arms or, preferably, in a crate or carrier. Once home, folks who plop the excited newcomer on the Oriental and let the kids chase him will be mopping up in no time—and regretting the lesson they taught their new pup. Instead, take him to his toileting area immediately. From there, carry out your schedule for feeding, toileting, napping, and play/exercise. From Day One, your pup will need family time and brief periods of solitary confinement. Solitude may be new to Puppers, so he may vocalize concern. Don’t give in and comfort him or you may create a monster. “Gee, if making noise brought them running once, maybe more whimpering is needed to get their attention again,” reasons the pup. Give him attention for good behavior, such as chewing on a toy or resting quietly. Doing things correctly from the start prevents confusion. Through puppy preparedness, you are one step closer to your Dream Dog.', 'https://animalwellnessmagazine.com/wp-content/uploads/dog-paw-e1520960952691.jpg'),
(1, 'Help a Puppy Who Isn’t Gaining Weight', 'Dog', 'You’re feeding your puppy a nutritionally-balanced diet and following the directions on the label with precision. You watch as your new best friend voraciously eats his dog food, and surmise his appetite isn’t the problem. Despite your best efforts, however, he’s not gaining weight as he should. Puppies grow at different rates, but if yours is below the average for his breed, there may be an issue. It’s best to play it safe and bring your puppy to the vet to rule out medical causes. There could be any number of reasons behind her inability to gain weight, but intestinal parasites—particularly roundworms and hookworms—are probably the most common, says Dr. Joe Bartges. Additionally, certain foods can be too rich for some puppies and result in diarrhea.  Also look for behavioral clues. “If the puppy is having to compete to eat with other dogs in the house, the puppy should be fed separately,” she says. Not only will this help reduce stress, it will allow the owner to determine the exact amount of food the puppy is eating.', 'https://www.petmd.com/sites/default/files/petmd-puppy-weight.jpg'),
(2, '10 Things You Need in Your Pet First Aid Kit', 'Dog', '1. Emergency Contact Card: Use a contact card to write down the phone numbers for your veterinarian, a 24hr emergency clinic and animal poison control. If you have to leave your pet with a sitter, a copy of the card can be left with them. 
2. Blunt-Tipped Scissors: A pair of scissors can be an overlooked element in a first aid kit for pets, but without them, its often difficult to administer care. Whether youre removing hair near an injury or applying bandages, scissors always come in handy.
3. Bandages: Bandages are staples in any dog first aid kit or cat first aid kit. In many cases, the bandage you place after an injury will be temporary until you can get to your veterinarian. Even so, it serves a vital role by providing support and preventing contamination.
4. Sterile Eye Solution: Its scary to think of chemicals or foreign objects being anywhere near your pets eyes. If an irritant finds its way into the eye, the animal is likely to scratch or rub and make it worse. 
5. Latex or Rubber Gloves: When providing first aid for pets, gloves are essential items to have. In addition to protecting yourself, using gloves helps decrease your pets risk of infection.  
6. Plastic Syringe: Anyone who has tried to give liquid-based oral pet meds to a fidgety pet knows the value of a syringe. A needleless syringe can also be used to give oral fluids to a dehydrated pet, or you can use it to flush out and clean a wound.
7. Medications: Depending on your individual dog or cats needs, you may need to have specific medications (including prescription medications) in your first aid kit for pets, but make sure to keep an eye on those expiration dates.
8. Tweezers: When a sharp object, such as a thorn or piece of glass, becomes lodged in a pets skin, it can be difficult, if not impossible, to remove with just your fingers. T
9. Antiseptic Wipes: Using antiseptic wipes or rinses on your pets wound will minimize the risk of infection. Wipes are especially convenient for cleaning around the face or in-between the toes.
10. Digital Thermometer: Measuring your pets temperature can help you understand how serious their condition is. When consulting your veterinarian over the phone, it will also be good information to convey.', 'https://www.petmd.com/sites/default/files/dog-with-firstaidkit-picture-id93244792.jpg'),
(3, 'Cat Hairball Problems?', 'Cat', 'As a cat parent, you probably dread that sound. You know the one: the ack, aaaccckkk, retching sound your beloved kitty makes when she is about to heave up a hairball. While hairballs are a fairly common occupational hazard of being a cat parent, you might be surprised to learn that they are not a normal part of a healthy cat’s life. Hairballs form when cats ingest hair as they lick themselves repeatedly while grooming their coats. Because a cat’s tongue has backwards-facing barbs on it, the tongue moves hair into the mouth, down the esophagus and into the stomach. Under normal circumstances, the grooming obsession that causes cats to ingest hair should not be a problem. The hair should move through the digestive system along with food and be eliminated in feces. Hairballs become a problem when the cat’s digestive system fails to move the hair efficiently through the stomach and intestines and out of the body as waste. An occasional hairball may not be anything serious—cats can vomit up hair and food if they eat too fast or develop a sensitivity to their regular food. Due to the seriousness of some of the potential causes of hairballs, however pet parents should take their cat to the vet if she starts producing hairballs. The only way to determine if a simple change in diet is enough to resolve the issue or a more serious health problem is present, is to have your regular vet examine your cat, both doctors stress.', 'https://www.petmd.com/sites/default/files/cat-grooming-with-brush-shutterstock_166323080.jpg'),
(4, 'Whisker Fatigue in Cats', 'Cat', 'While cats can voluntarily “turn on” the sensory focus of their whiskers exactly where they want whisker receptors mostly respond to a cat’s autonomic system. You can think of whisker fatigue as an information overload that stresses out your cat. Because whisker hairs are so sensitive, every time your cat comes into contact with an object or detects movement, even a small change in air current or a slight brush against her face, messages are transmitted from those sensory organs at the base of her whiskers to her brain,. That barrage of “messages” could stress out your cat, eventually causing what some people call whisker fatigue.
However that “fatigue” may not be the best description of the condition, since what your cat is feeling is probably more like distaste or aversion than soreness or actual fatigue. In fact, whisker stress is another term some people use for the condition. Not all feline vets think whisker fatigue is a real condition or cause for concern. While a cat’s whiskers do serve as very sensitive tactile sensors, contact between whiskers and objects causes stress in cats. That said, stress, for whatever reason, is a real issue of concern for cat owners and vets.', 'https://www.petmd.com/sites/default/files/Whiskers.jpg');

INSERT INTO comments(user_id, post_id, comment_body) VALUES (1, 3, 'I found this very insightful I might add that playing with your cat is also important. Keeps them happy!'), (4, 3, 'I agree with the playing. I have found that the best toys are those that can be made to jump and dance around and look alive.'), (2, 1, 'I love this I would also add to take your time making a decision. With all of the adorable “fur babies” in need of homes, you might be tempted to make a snap decision. However, it will be better for your future furry BFF if you put a lot of thought into it. For example, do you live in an apartment, or a house with a yard? Does your family travel a lot? Who will be there to let your dog out when you’re not home? Do your siblings want a new dog as much as you do?'), (3, 1, 'I want another dog'), (1, 4, 'I remember the first day as well. I was super excited but my buddy was alittle shy'), (3, 4, 'This here is a great post!'), (2, 5, 'I wish I read this before I brought my cat home. little fella went crazy with the change. now the house is all his lol'), (3, 5, 'I create a hiding spot for my cat. Even I forget where it is.'), (4, 2, 'My cat doesnt like sharing his space. Hes super territorial'), (1, 6, 'Alot of people this that hitting their dogs will teach them obedience. In fact it doesnt'), (4, 6, 'I keep my dog tired with plenty of exercise so she doesnt tear up the house'), (2, 7, 'Am I horrible that I love fat cats LOL'), (4, 7, 'My cats are picky with their food'), (1, 7, 'I too love fat cats!'), (1, 8, 'I do a mixer of dry and wet food to make sure their stool is not too hard or too soft'), (3, 8, 'I always give my dogs Blue'), (2, 8, 'I have heard people actually meal prep for their dogs');

INSERT INTO favorited(user_id, pet_id)
VALUES (1, 44439537), (2, 44439791), (2, 44439926), (2, 44439939), (2, 44440935), (2, 44440950), (2, 44440936), (1, 44441053), (1, 44440829), (4, 44441011), (4, 44440934) ;

INSERT INTO adopted(user_id, pet_id)
VALUES(1, 44441235), (1, 44441017), (2, 44440157), (3, 44440129), (3, 44439718), (4, 44440157);
