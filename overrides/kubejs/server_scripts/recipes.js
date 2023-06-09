console.info("Recipes")


ServerEvents.recipes(event => {
	event.shapeless(KJ("fine_sand_bucket"), [KJ("sand_ball"), MC("bucket")])

	event.recipes.createoreexcavation.drilling([Item.of(MC("ancient_debris")).withChance(0.1)], `{"text": "Ancient Debris"}`, 1, 1800).drill(COE("netherite_drill")).fluid({"fluid": CEI("hyper_experience"), "amount": 1}).veinSize(1, 5).biomeWhitelist(MC("is_nether")).stress(1024).id("ancient_debris");

	event.recipes.createoreexcavation.drilling([Item.of(COE("raw_diamond")).withChance(0.1)], `{"text": "Diamond"}`, 5, 1200).drill(COE("netherite_drill")).fluid({"fluid": CEI("experience"), "amount": 50}).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(1024).id("diamond");

	event.recipes.createoreexcavation.drilling(MC("lapis_ore"), `{"text": "Lapis"}`, 10, 100).fluid({"fluid": MC("water"), "amount": 1000}).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("lapis");

	event.custom(Emptying([Item.of(MC("slime_ball"))], [{ "fluid": KJ("slime"), "amount": 100 }]))

	event.custom(Emptying([Item.of(KJ("sand_ball"))], [{ "fluid": KJ("fine_sand"), "amount": 1000 }]))

	event.custom(CreateCobbleGeneratorRecipe([], [MC("lava"), MC("water")], [MC("cobblestone")]))

	event.custom(CreateCobbleGeneratorRecipe([], [MC("lava"), C("honey")], [C("limestone")]))

	event.custom(CreateCobbleGeneratorRecipe([], [MC("lava"), C("chocolate")], [C("scoria")]))

	event.custom(CreateCobbleGeneratorRecipe([MC("blue_ice"), MC("soul_soil")], [MC("lava")], [MC("basalt")]))

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
		} else if (woodType != "bamboo") {
			event.custom(Cutting([Item.of(modFunc(`${woodType}_log`))], [Item.of(Q(`hollow_${woodType}_log`))]))
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

	event.custom(Filling([Item.of(MC("glass_bottle")), { "fluid": KJ("dragon_breath"), "amount": 250 }], [Item.of(MC("dragon_breath"))]))
	event.custom(Emptying([Item.of(MC("dragon_breath"))], [Item.of(MC("glass_bottle")), { "fluid": KJ("dragon_breath"), "amount": 250 }]))
})