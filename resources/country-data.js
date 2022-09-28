const country_data = [{name:"Afghanistan",capital:"Kaboul",filename:"Flag_of_Afghanistan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"},{name:"Albanie",capital:"Tirana",filename:"Flag_of_Albania.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"},{name:"Algérie",capital:"Alger",filename:"Flag_of_Algeria.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"},{name:"Andorre",capital:"Andorre-la-Vieille",filename:"Flag_of_Andorra.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"},{name:"Angola",capital:"Luanda",filename:"Flag_of_Angola.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"},{name:"Antigua-et-Barbuda",capital:"Saint John’s",filename:"Flag_of_Antigua_and_Barbuda.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg"},{name:"Argentine",capital:"Buenos Aires",filename:"Flag_of_Argentina.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"},{name:"Arménie",capital:"Erevan",filename:"Flag_of_Armenia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg"},{name:"Australie",capital:"Canberra",filename:"Flag_of_Australia_%28converted%29.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"},{name:"Autriche",capital:"Vienne",filename:"Flag_of_Austria.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"},{name:"Azerbaïdjan",capital:"Bakou",filename:"Flag_of_Azerbaijan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"},{name:"Bahamas",capital:"Nassau",filename:"Flag_of_the_Bahamas.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg"},{name:"Bahreïn",capital:"Manama",filename:"Flag_of_Bahrain.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"},{name:"Bangladesh",capital:"Dhaka",filename:"Flag_of_Bangladesh.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"},{name:"Barbade",capital:"Bridgetown",filename:"Flag_of_Barbados.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"},{name:"Belgique",capital:"Bruxelles",filename:"Flag_of_Belgium_%28civil%29.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg"},{name:"Bélize",capital:"Belmopan",filename:"Flag_of_Belize.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"},{name:"Bénin",capital:"Porto-Novo",filename:"Flag_of_Benin.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"},{name:"Bhoutan",capital:"Thimphou",filename:"Flag_of_Bhutan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg"},{name:"Biélorussie",capital:"Minsk",filename:"Flag_of_Belarus.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"},{name:"Bolivie",capital:"La Paz",filename:"Flag_of_Bolivia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"},{name:"Bosnie-Herzégovine",capital:"Sarajevo",filename:"Flag_of_Bosnia_and_Herzegovina.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"},{name:"Botswana",capital:"Gaborone",filename:"Flag_of_Botswana.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"},{name:"Brésil",capital:"Brasilia",filename:"Flag_of_Brazil.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"},{name:"Brunei",capital:"Bandar Seri Begawan",filename:"Flag_of_Brunei.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"},{name:"Bulgarie",capital:"Sofia",filename:"Flag_of_Bulgaria.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"},{name:"Burkina Faso",capital:"Ouagadougou",filename:"Flag_of_Burkina_Faso.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"},{name:"Burundi",capital:"Gitega",filename:"Flag_of_Burundi.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg"},{name:"Cambodge",capital:"Phnom Penh",filename:"Flag_of_Cambodia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"},{name:"Cameroun",capital:"Yaoundé",filename:"Flag_of_Cameroon.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"},{name:"Canada",capital:"Ottawa",filename:"Flag_of_Canada.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"},{name:"Cap-Vert",capital:"Praia",filename:"Flag_of_Cape_Verde.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg"},{name:"Chili",capital:"Santiago",filename:"Flag_of_Chile.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"},{name:"Chine",capital:"Beijing",filename:"Flag_of_the_People%27s_Republic_of_China.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"},{name:"Chypre",capital:"Nicosie",filename:"Flag_of_Cyprus.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg"},{name:"Colombie",capital:"Bogota",filename:"Flag_of_Colombia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"},{name:"Comores",capital:"Moroni",filename:"Flag_of_the_Comoros.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg"},{name:"Costa Rica",capital:"San José",filename:"Flag_of_Costa_Rica.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg"},{name:"Croatie",capital:"Zagreb",filename:"Flag_of_Croatia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg"},{name:"Cuba",capital:"La Havane",filename:"Flag_of_Cuba.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"},{name:"Danemark",capital:"Copenhague",filename:"Flag_of_Denmark.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"},{name:"Djibouti",capital:"Djibouti",filename:"Flag_of_Djibouti.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg"},{name:"Dominique",capital:"Roseau",filename:"Flag_of_Dominica.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg"},{name:"Égypte",capital:"Le Caire",filename:"Flag_of_Egypt.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"},{name:"Salvador",capital:"San Salvador",filename:"Flag_of_El_Salvador.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg"},{name:"Équateur",capital:"Quito",filename:"Flag_of_Ecuador.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg"},{name:"Guinée Équatoriale",capital:"Malabo",filename:"Flag_of_Equatorial_Guinea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg"},{name:"Érythrée",capital:"Asmara",filename:"Flag_of_Eritrea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg"},{name:"Estonie",capital:"Tallinn",filename:"Flag_of_Estonia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg"},{name:"Eswatini",capital:"Mbabane",filename:"Flag_of_Eswatini.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg"},{name:"Éthiopie",capital:"Addis-Abeba",filename:"Flag_of_Ethiopia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"},{name:"Fidji",capital:"Suva",filename:"Flag_of_Fiji.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg"},{name:"Finlande",capital:"Helsinki",filename:"Flag_of_Finland.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"},{name:"France",capital:"Paris",filename:"Flag_of_France.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"},{name:"Gabon",capital:"Libreville",filename:"Flag_of_Gabon.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg"},{name:"Gambie",capital:"Banjul",filename:"Flag_of_The_Gambia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg"},{name:"Géorgie",capital:"Tbilissi",filename:"Flag_of_Georgia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"},{name:"Allemagne",capital:"Berlin",filename:"Flag_of_Germany.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"},{name:"Ghana",capital:"Accra",filename:"Flag_of_Ghana.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg"},{name:"Grèce",capital:"Athènes",filename:"Flag_of_Greece.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"},{name:"Grenade",capital:"Saint Georges",filename:"Flag_of_Grenada.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg"},{name:"Guatemala",capital:"Guatemala",filename:"Flag_of_Guatemala.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg"},{name:"Guinée",capital:"Conakry",filename:"Flag_of_Guinea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg"},{name:"Guinée-Bissau",capital:"Bissau",filename:"Flag_of_Guinea-Bissau.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg"},{name:"Guyana",capital:"Georgetown",filename:"Flag_of_Guyana.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg"},{name:"Haïti",capital:"Port-au-Prince",filename:"Flag_of_Haiti.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg"},{name:"Honduras",capital:"Tegucigalpa",filename:"Flag_of_Honduras.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg"},{name:"Hongrie",capital:"Budapest",filename:"Flag_of_Hungary.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg"},{name:"Islande",capital:"Reykjavik",filename:"Flag_of_Iceland.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg"},{name:"Inde",capital:"New Delhi",filename:"Flag_of_India.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"},{name:"Indonésie",capital:"Jakarta",filename:"Flag_of_Indonesia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"},{name:"Iran",capital:"Téhéran",filename:"Flag_of_Iran.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg"},{name:"Irak",capital:"Bagdad",filename:"Flag_of_Iraq.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg"},{name:"Irlande",capital:"Dublin",filename:"Flag_of_Ireland.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"},{name:"Israël",capital:"Jérusalem",filename:"Flag_of_Israel.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"},{name:"Italie",capital:"Rome",filename:"Flag_of_Italy.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"},{name:"Côte d’Ivoire",capital:"Yamoussoukro",filename:"Flag_of_C%C3%B4te_d%27Ivoire.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg"},{name:"Jamaïque",capital:"Kingston",filename:"Flag_of_Jamaica.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg"},{name:"Japon",capital:"Tokyo",filename:"Flag_of_Japan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"},{name:"Jordanie",capital:"Amman",filename:"Flag_of_Jordan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg"},{name:"Kazakhstan",capital:"Astana",filename:"Flag_of_Kazakhstan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg"},{name:"Kenya",capital:"Nairobi",filename:"Flag_of_Kenya.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"},{name:"Kiribati",capital:"Tarawa-Sud",filename:"Flag_of_Kiribati.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg"},{name:"Corée du Nord",capital:"Pyongyang",filename:"Flag_of_North_Korea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"},{name:"Corée du Sud",capital:"Séoul",filename:"Flag_of_South_Korea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"},{name:"Koweït",capital:"Ville de Koweït",filename:"Flag_of_Kuwait.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg"},{name:"Kirghizistan",capital:"Bichkek",filename:"Flag_of_Kyrgyzstan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg"},{name:"Laos",capital:"Vientiane",filename:"Flag_of_Laos.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg"},{name:"Lettonie",capital:"Riga",filename:"Flag_of_Latvia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg"},{name:"Liban",capital:"Beyrouth",filename:"Flag_of_Lebanon.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg"},{name:"Lesotho",capital:"Maseru",filename:"Flag_of_Lesotho.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg"},{name:"Liberia",capital:"Monrovia",filename:"Flag_of_Liberia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg"},{name:"Libye",capital:"Tripoli",filename:"Flag_of_Libya.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg"},{name:"Liechtenstein",capital:"Vaduz",filename:"Flag_of_Liechtenstein.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg"},{name:"Lituanie",capital:"Vilnius",filename:"Flag_of_Lithuania.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg"},{name:"Luxembourg",capital:"Luxembourg",filename:"Flag_of_Luxembourg.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg"},{name:"Macédoine du Nord",capital:"Skopje",filename:"Flag_of_Macedonia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg"},{name:"Madagascar",capital:"Antananarivo",filename:"Flag_of_Madagascar.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg"},{name:"Malawi",capital:"Lilongwe",filename:"Flag_of_Malawi.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg"},{name:"Malaisie",capital:"Kuala Lumpur",filename:"Flag_of_Malaysia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg"},{name:"Maldives",capital:"Malé",filename:"Flag_of_Maldives.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg"},{name:"Mali",capital:"Bamako",filename:"Flag_of_Mali.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg"},{name:"Malte",capital:"La Valette",filename:"Flag_of_Malta.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg"},{name:"Îles Marshall",capital:"Delap-Uliga-Darrit",filename:"Flag_of_the_Marshall_Islands.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg"},{name:"Mauritanie",capital:"Nouakchott",filename:"Flag_of_Mauritania.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg"},{name:"Maurice",capital:"Port-Louis",filename:"Flag_of_Mauritius.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg"},{name:"Mexique",capital:"Mexico",filename:"Flag_of_Mexico.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"},{name:"Micronésie",capital:"Palikir",filename:"Flag_of_the_Federated_States_of_Micronesia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg"},{name:"Moldavie",capital:"Chisinau",filename:"Flag_of_Moldova.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg"},{name:"Monaco",capital:"Commune de Monaco",filename:"Flag_of_Monaco.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg"},{name:"Mongolie",capital:"Oulan-Bator",filename:"Flag_of_Mongolia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg"},{name:"Monténégro",capital:"Podgorica",filename:"Flag_of_Montenegro.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg"},{name:"Maroc",capital:"Rabat",filename:"Flag_of_Morocco.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"},{name:"Mozambique",capital:"Maputo",filename:"Flag_of_Mozambique.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg"},{name:"Myanmar",capital:"Naypyidaw",filename:"Flag_of_Myanmar.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg"},{name:"Namibie",capital:"Windhoek",filename:"Flag_of_Namibia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg"},{name:"Nauru",capital:"Yaren",filename:"Flag_of_Nauru.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg"},{name:"Népal",capital:"Katmandou",filename:"Flag_of_Nepal.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"},{name:"Pays-Bas",capital:"Amsterdam",filename:"Flag_of_the_Netherlands.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"},{name:"Nouvelle-Zélande",capital:"Wellington",filename:"Flag_of_New_Zealand.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg"},{name:"Nicaragua",capital:"Managua",filename:"Flag_of_Nicaragua.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg"},{name:"Niger",capital:"Niamey",filename:"Flag_of_Niger.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg"},{name:"Nigéria",capital:"Abuja",filename:"Flag_of_Nigeria.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"},{name:"Norvège",capital:"Oslo",filename:"Flag_of_Norway.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"},{name:"Oman",capital:"Mascate",filename:"Flag_of_Oman.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg"},{name:"Pakistan",capital:"Islamabad",filename:"Flag_of_Pakistan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"},{name:"Palaos",capital:"Melekeok",filename:"Flag_of_Palau.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg"},{name:"Palestine",capital:"Ramallah",filename:"Flag_of_Palestine.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"},{name:"Panama",capital:"Panama",filename:"Flag_of_Panama.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg"},{name:"Papouasie-Nouvelle-Guinée",capital:"Port Moresby",filename:"Flag_of_Papua_New_Guinea.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg"},{name:"Paraguay",capital:"Asuncion",filename:"Flag_of_Paraguay.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg"},{name:"Pérou",capital:"Lima",filename:"Flag_of_Peru.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"},{name:"Philippines",capital:"Manille",filename:"Flag_of_the_Philippines.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg"},{name:"Pologne",capital:"Varsovie",filename:"Flag_of_Poland.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"},{name:"Portugal",capital:"Lisbonne",filename:"Flag_of_Portugal.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"},{name:"Qatar",capital:"Doha",filename:"Flag_of_Qatar.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg"},{name:"République Centrafricaine",capital:"Bangui",filename:"Flag_of_the_Central_African_Republic.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg"},{name:"République démocratique du Congo",capital:"Kinshasa",filename:"Flag_of_the_Democratic_Republic_of_the_Congo.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg"},{name:"République Dominicaine",capital:"Saint-Domingue",filename:"Flag_of_the_Dominican_Republic.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg"},{name:"République du Congo",capital:"Brazzaville",filename:"Flag_of_the_Republic_of_the_Congo.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg"},{name:"République Tchèque",capital:"Prague",filename:"Flag_of_the_Czech_Republic.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg"},{name:"Roumanie",capital:"Bucarest",filename:"Flag_of_Romania.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"},{name:"Russie",capital:"Moscou",filename:"Flag_of_Russia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"},{name:"Rwanda",capital:"Kigali",filename:"Flag_of_Rwanda.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg"},{name:"Saint-Christophe-et-Niévès",capital:"Basseterre",filename:"Flag_of_Saint_Kitts_and_Nevis.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg"},{name:"Sainte-Lucie",capital:"Castries",filename:"Flag_of_Saint_Lucia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg"},{name:"Saint-Vincent-et-les-Grenadines",capital:"Kingstown",filename:"Flag_of_Saint_Vincent_and_the_Grenadines.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg"},{name:"Samoa",capital:"Apia",filename:"Flag_of_Samoa.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg"},{name:"Saint-Marin",capital:"Saint-Marin",filename:"Flag_of_San_Marino.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg"},{name:"Sao Tomé-et-Principe",capital:"São Tomé",filename:"Flag_of_Sao_Tome_and_Principe.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg"},{name:"Arabie Saoudite",capital:"Riyad",filename:"Flag_of_Saudi_Arabia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"},{name:"Sénégal",capital:"Dakar",filename:"Flag_of_Senegal.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"},{name:"Serbie",capital:"Belgrade",filename:"Flag_of_Serbia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg"},{name:"Seychelles",capital:"Victoria",filename:"Flag_of_Seychelles.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg"},{name:"Sierra Leone",capital:"Freetown",filename:"Flag_of_Sierra_Leone.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg"},{name:"Singapour",capital:"Singapour",filename:"Flag_of_Singapore.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"},{name:"Slovaquie",capital:"Bratislava",filename:"Flag_of_Slovakia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg"},{name:"Slovénie",capital:"Ljubljana",filename:"Flag_of_Slovenia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg"},{name:"Îles Salomon",capital:"Honiara",filename:"Flag_of_the_Solomon_Islands.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg"},{name:"Somalie",capital:"Mogadiscio",filename:"Flag_of_Somalia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg"},{name:"Afrique du Sud",capital:"Pretoria",filename:"Flag_of_South_Africa.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"},{name:"Soudan du Sud",capital:"Djouba",filename:"Flag_of_South_Sudan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg"},{name:"Espagne",capital:"Madrid",filename:"Flag_of_Spain.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"},{name:"Sri Lanka",capital:"Sri Jayawardenapura Kotte",filename:"Flag_of_Sri_Lanka.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg"},{name:"Soudan",capital:"Khartoum",filename:"Flag_of_Sudan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg"},{name:"Suriname",capital:"Paramaribo",filename:"Flag_of_Suriname.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg"},{name:"Suède",capital:"Stockholm",filename:"Flag_of_Sweden.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"},{name:"Suisse",capital:"Berne",filename:"Flag_of_Switzerland_%28Pantone%29.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg"},{name:"Syrie",capital:"Damas",filename:"Flag_of_Syria.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg"},{name:"Tadjikistan",capital:"Douchanbé",filename:"Flag_of_Tajikistan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg"},{name:"Tanzanie",capital:"Dodoma",filename:"Flag_of_Tanzania.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg"},{name:"Tchad",capital:"N'Djaména",filename:"Flag_of_Chad.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg"},{name:"Thaïlande",capital:"Bangkok",filename:"Flag_of_Thailand.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"},{name:"Timor Oriental",capital:"Dili",filename:"Flag_of_East_Timor.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg"},{name:"Togo",capital:"Lomé",filename:"Flag_of_Togo.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg"},{name:"Tonga",capital:"Nuku'alofa",filename:"Flag_of_Tonga.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg"},{name:"Trinité-et-Tobago",capital:"Port-d'Espagne",filename:"Flag_of_Trinidad_and_Tobago.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg"},{name:"Tunisie",capital:"Tunis",filename:"Flag_of_Tunisia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"},{name:"Turquie",capital:"Ankara",filename:"Flag_of_Turkey.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"},{name:"Turkménistan",capital:"Achgabat",filename:"Flag_of_Turkmenistan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg"},{name:"Tuvalu",capital:"Funafuti",filename:"Flag_of_Tuvalu.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg"},{name:"Ouganda",capital:"Kampala",filename:"Flag_of_Uganda.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"},{name:"Ukraine",capital:"Kiev",filename:"Flag_of_Ukraine.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"},{name:"Émirats Arabes Unis",capital:"Abou Dabi",filename:"Flag_of_the_United_Arab_Emirates.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"},{name:"Royaume-Uni",capital:"Londres",filename:"Flag_of_the_United_Kingdom.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"},{name:"États-Unis",capital:"Washington, D.C.",filename:"Flag_of_the_United_States.svg",imgurl:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"},{name:"Uruguay",capital:"Montevideo",filename:"Flag_of_Uruguay.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg"},{name:"Ouzbékistan",capital:"Tachkent",filename:"Flag_of_Uzbekistan.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"},{name:"Vanuatu",capital:"Port-Vila",filename:"Flag_of_Vanuatu.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg"},{name:"Vatican",capital:"Cité du Vatican",filename:"Flag_of_the_Vatican_City.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg"},{name:"Venezuela",capital:"Caracas",filename:"Flag_of_Venezuela.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg"},{name:"Viêt Nam",capital:"Hanoï",filename:"Flag_of_Vietnam.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"},{name:"Yémen",capital:"Sanaa",filename:"Flag_of_Yemen.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg"},{name:"Zambie",capital:"Lusaka",filename:"Flag_of_Zambia.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg"},{name:"Zimbabwe",capital:"Harare",filename:"Flag_of_Zimbabwe.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg"},{name:"Kosovo",capital:"Pristina",filename:"Flag_of_Kosovo.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg"},{name:"Niue",capital:"Alofi",filename:"Flag_of_Niue.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg"},{name:"Taïwan",capital:"Taipei",filename:"Flag_of_the_Republic_of_China.svg",imgurl:"https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg"}];