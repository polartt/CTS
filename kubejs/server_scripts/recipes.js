console.info("Recipes")


ServerEvents.recipes(event => {
	event.shapeless(KJ("fine_sand_bucket"), [KJ("sand_ball"), MC("bucket")])

	event.recipes.createoreexcavation.drilling([Item.of(MC("ancient_debris")).withChance(0.1)], `{"text": "Ancient Debris"}`, 1, 1800).drill(COE("netherite_drill")).fluid({"fluid": CEI("hyper_experience"), "amount": 1}).veinSize(1, 5).biomeWhitelist(MC("is_nether")).stress(1024).id("ancient_debris");

	event.recipes.createoreexcavation.drilling([Item.of(S("rough_diamond")).withChance(0.1)], `{"text": "Diamond"}`, 3, 1200).drill(COE("netherite_drill")).fluid({"fluid": CEI("experience"), "amount": 50}).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(1024).id("diamond");

	event.recipes.createoreexcavation.drilling([Item.of(S("rough_emerald")).withChance(0.1)], `{"text": "Emerald"}`, 5, 1000).fluid({"fluid": MC("water"), "amount": 1000}).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(1024).id("diamond");

	event.recipes.createoreexcavation.drilling(S("rough_lazurite"), `{"text": "Lazurite"}`, 5, 200).fluid({"fluid": MC("water"), "amount": 1000}).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("lapis");

	event.recipes.createoreexcavation.drilling(S("rough_cinnabar"), `{"text": "Cinnabar"}`, 10, 400).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("redstone");

	event.recipes.createoreexcavation.drilling(S("magnetite_chunk"), `{"text": "Magnetite"}`, 10, 200).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("iron");

	const addCrushing = (rocks, metals) => {
		rocks.forEach(rock => {
			metals.forEach(metal => {
				event.custom(Crushing([Item.of(S(`${rock}_${metal}_ore`))], [Item.of(C(`crushed_raw_${metal}`)), Item.of(C(`crushed_raw_${metal}`)).withChance(0.75), Item.of(C("experience_nugget")).withChance(0.75), Item.of(MC(rock)).withChance(0.12)]))
			})
		});
	}

	addCrushing(["granite", "tuff", "andesite", "diorite"], ["copper", "gold", "iron", "zinc"])

	event.custom(Emptying([Item.of(MC("slime_ball"))], [{ "fluid": KJ("slime"), "amount": 100 }]))

	event.custom(Emptying([Item.of(KJ("sand_ball"))], [{ "fluid": KJ("fine_sand"), "amount": 1000 }]))

	const CreateCobbleGeneratorRecipe = (items, fluids, outputs) => {
		// This is horrible, and I have to do it bless KubeJS
		for (let stubs = 0; stubs < 7; stubs++) {
			let ingredients = fluids.map((fluid) => ({ "amount": 2 ** stubs, "fluid": fluid }))
				.concat(items.map((item) => (Item.of(item))))

			for (let i = 0; i < stubs; i++) {
				ingredients.push(Item.of(KJ("profession_stub")))
			}

			let ingredients_2 = fluids.map((fluid) => ({ "amount": 2 ** stubs, "fluid": fluid }))
			.concat(items.map((item) => (Item.of(item))))

			if (stubs > 0) {
				ingredients_2.push(Item.of(KJ("profession_stub"), stubs))
			}

			let results = ingredients_2.concat(outputs.map((item) => (Item.of(item, 2 ** stubs))))

			event.custom(Mixing(ingredients, results))
		}
	}

	CreateCobbleGeneratorRecipe([], [MC("lava"), MC("water")], [MC("cobblestone")])

	CreateCobbleGeneratorRecipe([], [MC("lava"), C("honey")], [C("limestone")])

	CreateCobbleGeneratorRecipe([], [MC("lava"), C("chocolate")], [C("scoria")])

	CreateCobbleGeneratorRecipe([MC("blue_ice"), MC("soul_soil")], [MC("lava")], [MC("basalt")])
	
	event.custom(Compacting([{ "fluid": KJ("fine_sand"), "amount": 500 }, Item.of(KJ("coal_chunk"))], [Item.of(KJ("silicon_compound"))]))

	event.custom(Splashing([Item.of(MC("sandstone"))], [Item.of(KJ("sand_ball")).withChance(0.0625)]))

	event.custom(Splashing([Item.of(MC("copper_block"))], [Item.of(MC("exposed_copper"))]))
	event.custom(Splashing([Item.of(MC("exposed_copper"))], [Item.of(MC("weathered_copper"))]))
	event.custom(Splashing([Item.of(MC("weathered_copper"))], [Item.of(MC("oxidized_copper"))]))

	event.replaceOutput({}, CBC("cast_iron_ingot"), CD("cast_iron_ingot"))
	event.replaceInput({}, CBC("cast_iron_ingot"), CD("cast_iron_ingot"))
	event.replaceInput({}, DD("cast_iron_billet"), CD("cast_iron_ingot"))

	event.custom(HeatedMixing([Item.of(MC("quartz")), Item.of(MC("redstone")), Item.of(MC("redstone")), Item.of(MC("redstone")), Item.of(MC("redstone"))], [Item.of(C("rose_quartz"))]))

	event.shapeless(`8x ${Q("limestone")}`, [`8x #${(F("stone"))}`, Item.of(MC("lime_dye"))])
	event.custom(Compacting([Item.of(MC("clay"))], [Item.of(Q("shale"))]))
	event.custom(Compacting([Item.of(MC("red_sandstone"))], [Item.of(Q("jasper"))]))
	event.custom(Compacting([Item.of(MC("dirt")), Item.of(MC("ice"))], [Item.of(Q("permafrost"))]))
	event.custom(Mixing([Item.of(MC("popped_chorus_fruit")), Item.of(MC("end_stone"))], [Item.of(Q("myalite"))]))

	const MakePlankCuttingRecipes = (modFunc, woodType) => {
		event.custom(Cutting([Item.of(modFunc(`${woodType}_planks`))], [Item.of(`2x ${modFunc(`${woodType}_slab`)}`)]))

		event.custom(Cutting([Item.of(modFunc(`${woodType}_planks`))], [Item.of(modFunc(`${woodType}_stairs`))]))
		if (woodType == "crimson" || woodType == "warped") {
			event.custom(Cutting([Item.of(modFunc(`${woodType}_stem`))], [Item.of(Q(`hollow_${woodType}_stem`))]))
			event.custom(SequencedAssembly(
				Item.of(Q(`hollow_${woodType}_stem`)),
				Item.of(KJ("incomplete_barrel")),
				[
					Deploying([Item.of(KJ("incomplete_barrel")), Item.of("#minecraft:wooden_slabs")], [Item.of(KJ("incomplete_barrel"))])
				],
				[Item.of(MC("barrel"))],
				2
			))
		} else if (woodType != "bamboo") {
			event.custom(Cutting([Item.of(modFunc(`${woodType}_log`))], [Item.of(Q(`hollow_${woodType}_log`))]))
			event.custom(SequencedAssembly(
				Item.of(Q(`hollow_${woodType}_log`)),
				Item.of(KJ("incomplete_barrel")),
				[
					Deploying([Item.of(KJ("incomplete_barrel")), Item.of("#minecraft:wooden_slabs")], [Item.of(KJ("incomplete_barrel"))])
				],
				[Item.of(MC("barrel"))],
				2
			))
		}
	}

	event.shapeless(MC("mushroom_stew"), [`2x #${F("mushrooms")}`, MC("bowl")])

	const vanillaWoods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped", "mangrove"]
	const quarkWoods = ["blossom", "azalea", "ancient", "bamboo"]

	vanillaWoods.map(wood => MakePlankCuttingRecipes(MC, wood))

	quarkWoods.map(wood => MakePlankCuttingRecipes(Q, wood))

	event.shaped(CH("wide_lantern"), [
		"LL",
	], {
		L: MC("lantern")
	})

	event.shaped(CC("computer_normal"),[
		"SSS",
		"SCS",
		"SGS"
	], {
		S: MC("stone"),
		C: KJ("circuit"),
		G: MC("glass")
	})

	event.shaped(CC("computer_advanced"),[
		"SSS",
		"SCS",
		"SGS"
	], {
		S: MC("gold_ingot"),
		C: CC("computer_normal"),
		G: KJ("circuit")
	})

	event.shapeless(CC("pocket_computer_advanced"), [CC("computer_advanced"), MC("golden_apple")])

	event.shapeless(CC("pocket_computer_normal"), [CC("computer_normal"), MC("golden_apple")])

	event.shapeless(CC("pocket_computer_advanced"), [CC("pocket_computer_normal"), KJ("circuit")])

	event.shaped(AP("peripheral_casing"), [
		"BCB",
		"BRB",
		"BCB"
	], {
		B: C("brass_ingot"),
		R: MC("redstone_block"),
		C: KJ("circuit")
	})

	event.shaped(CH("tall_lantern"), [
		"L",
		"L"
	], {
		L: MC("lantern")
	})

	event.shaped(CH("wide_soul_lantern"), [
		"SS",
	], {
		S: MC("soul_lantern")
	})

	event.shaped(CH("tall_soul_lantern"), [
		"S",
		"S"
	], {
		S: MC("soul_lantern")
	})

	event.shaped(COE("drilling_machine"), [
		"BSLSB",
		"SCOCS",
		"XMDMF",
		"STTTS",
		"BSLSB"
	], {
		B: C("brass_block"),
		S: C("brass_sheet"),
		C: KJ("circuit"),
		X: C("brass_casing"),
		M: C("precision_mechanism"),
		D: C("mechanical_drill"),
		T: C("sturdy_sheet"),
		F: C("brass_tunnel"),
		O: C("spout"),
		L: C("copper_casing")
	})

	let CreateTea = (tea) => {
		event.custom(Mixing([Item.of(`${FR(tea)}_tea_leaves`), Item.of(`${FR(tea)}_tea_leaves`), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`${tea}_tea`), "amount": 250 }]))

		event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`${tea}_tea`), "amount": 250 }], [Item.of(`${FR(tea)}_tea`)]))
	}

	["green", "yellow", "black"].map(tea => CreateTea(tea))

	event.custom(HeatedMixing([Item.of(FR("rose_hips")), Item.of(FR("rose_hips")), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`rose_hip_tea`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`rose_hip_tea`), "amount": 250 }], [Item.of(FR("rose_hip_tea"))]))

	event.custom(HeatedMixing([Item.of(MC("dandelion")), Item.of(`#${FR("tea_leaves")}`), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`dandelion_tea`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`dandelion_tea`), "amount": 250 }], [Item.of(FR("dandelion_tea"))]))

	event.custom(HeatedMixing([Item.of(MC("nether_wart")), Item.of(MC("fermented_spider_eye")), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`purulent_tea`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`purulent_tea`), "amount": 250 }], [Item.of(FR("purulent_tea"))]))

	event.custom(HeatedMixing([Item.of(FR("coffee_berries")), Item.of(MC("glow_berries")), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`gamblers_tea`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`gamblers_tea`), "amount": 250 }], [Item.of(FR("gamblers_tea"))]))

	event.custom(Mixing([Item.of(MC("melon_slice")), Item.of(MC("melon_slice")), Item.of(MC("melon_slice")), Item.of(MC("melon_slice")), Item.of(MC("sugar")), { "fluid": MC("water"), "amount": 250 }], [{ "fluid": KJ(`melon_juice`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`melon_juice`), "amount": 250 }], [Item.of(FD("melon_juice"))]))

	event.custom(HeatedMixing([Item.of(MC("apple")), Item.of(MC("apple")), Item.of(MC("sugar"))], [{ "fluid": KJ(`apple_cider`), "amount": 250 }]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ(`apple_cider`), "amount": 250 }], [Item.of(FD("apple_cider"))]))

	event.custom(Mixing([Item.of(`${MC("sweet_berries")}`), Item.of(`${MC("sweet_berries")}`), Item.of(`${MC("sweet_berries")}`), Item.of(`${MC("sweet_berries")}`), Item.of(`${MC("sweet_berries")}`), Item.of(`${MC("sweet_berries")}`), { "fluid": MC("milk"), "amount": 500 }], [{ "fluid": KJ(`sweet_berry_filling`), "amount": 1000 }]))

	event.custom(Filling([Item.of(FD("pie_crust")), { "fluid": KJ(`sweet_berry_filling`), "amount": 1000 }], [Item.of(FD("sweet_berry_cheesecake"))]))

	event.custom(Mixing([Item.of(FR("rose_hips")), Item.of(FR("rose_hips")), Item.of(FR("rose_hips")), { "fluid": MC("milk"), "amount": 500 }, { "fluid": C("honey"), "amount": 250 }], [{ "fluid": KJ(`rose_hip_filling`), "amount": 1000 }]))

	event.custom(Filling([Item.of(FD("pie_crust")), { "fluid": KJ(`rose_hip_filling`), "amount": 1000 }], [Item.of(FR("rose_hip_pie"))]))

	event.custom(Mixing([Item.of(MC("sugar")), Item.of(MC("cocoa_beans")), { "fluid": MC("milk"), "amount": 250 }, { "fluid": KJ("dragon_breath"), "amount": 250 }], [{ "fluid": CC(`ruby_chocolate`), "amount": 250 }]))

	let CreateAlcohol = (drink) => {
		event.custom(Filling([Item.of(BC("tankard")), { "fluid": KJ(drink), "amount": 250 }], [Item.of(BC(drink))]))

		event.custom(Emptying([Item.of(BC(drink))], [{ "fluid": KJ(drink), "amount": 250 }, Item.of(BC("tankard"))]))
	}

	["beer", "bloody_mary", "dread_nog", "egg_grog", "glittering_grenadine", "kombucha", "mead", "pale_jane", "red_rum", "rice_wine", "saccharine_rum", "salty_folly", "steel_toe_stout", "strongroot_ale", "vodka", "withering_dross"].map(drink => CreateAlcohol(drink))

	event.custom(Compacting([Item.of(KJ("graham_cracker"))], [Item.of(C("dough")), Item.of(MC("sugar"))]))
	event.custom(Compacting([Item.of(KJ("graham_cracker"))], [Item.of(FD("wheat_dough")), Item.of(MC("sugar"))]))
	event.shapeless(KJ("smore"), [`2x ${KJ("graham_cracker")}`, CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("smore"), [`2x ${KJ("graham_cracker")}`, CCF("black_chocolate_glazed_marshmallow")])
	event.shapeless(KJ("more_smore"), [`2x ${KJ("smore")}`, CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("more_smore"), [`2x ${KJ("smore")}`, CCF("black_chocolate_glazed_marshmallow")])
	event.shapeless(KJ("four_smore"), [`2x ${KJ("more_smore")}`, CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("four_smore"), [`2x ${KJ("more_smore")}`, CCF("black_chocolate_glazed_marshmallow")])

	event.custom(SuperheatedMixing([{ "fluid": CEI("experience"), "amount": 100 }, Item.of(MC("lapis_lazuli")), Item.of(MC("glow_ink_sac")), Item.of(Q("ancient_fruit"))], [{ "fluid": CEI("hyper_experience"), "amount": 1 }]))

	//Chainges
	event.shaped(`8x ${MC("chain")}`, [
		"N",
		"I",
		"N"
	], {
		N: MC("iron_nugget"),
		I: MC("iron_ingot")
	})
	event.shapeless(C("encased_chain_drive"), [C("andesite_casing"), MC("chain")])

	// Mangrove
	event.shapeless(MC("mud"), MC("muddy_mangrove_roots"))

	event.custom(Milling(
		[
			Item.of(MC("muddy_mangrove_roots"))
		], [
		Item.of(MC("stick")).withChance(0.50),
		Item.of(MC("stick")).withChance(0.40),
		Item.of(MC("mangrove_propagule")).withChance(0.05)]
	))

	event.custom(Milling([Item.of(MC("mangrove_roots"))], [
		Item.of(MC("stick")).withChance(0.50),
		Item.of(MC("stick")).withChance(0.40)
	]))

	//End stone and dragons breath recipes
	event.custom(Mixing([Item.of(MC("cobblestone")), Item.of(MC("popped_chorus_fruit"))], [Item.of(MC("end_stone"))]))
	event.custom(SuperheatedMixing([Item.of(MC("dragon_head")), Item.of(MC("crying_obsidian"))], [{ "fluid": KJ("dragon_breath"), "amount": 250 }, Item.of(MC("dragon_head"))]))

	event.custom(Filling([Item.of("minecraft:glass_bottle"), { "fluid": KJ("dragon_breath"), "amount": 250 }], [Item.of(MC("dragon_breath"))]))
	event.custom(Emptying([Item.of(MC("dragon_breath"))], [Item.of("minecraft:glass_bottle"), { "fluid": KJ("dragon_breath"), "amount": 250 }]))
})