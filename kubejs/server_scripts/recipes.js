console.info("Recipes")


ServerEvents.recipes(event => {
	event.shapeless(KJ("fine_sand_bucket"), [KJ("sand_ball"), MC("bucket")])

	event.recipes.createoreexcavation.drilling([Item.of(MC("ancient_debris")).withChance(0.1)], `{"text": "Ancient Debris"}`, 1, 1800).drill(COE("netherite_drill")).fluid(Fluid.of(CEI("hyper_experience"), 1)).veinSize(1, 5).biomeWhitelist(MC("is_nether")).stress(1024).id("ancient_debris");

	event.recipes.createoreexcavation.drilling([Item.of(S("rough_diamond")).withChance(0.1)], `{"text": "Diamond"}`, 3, 1200).drill(COE("netherite_drill")).fluid(Fluid.of(CEI("experience"), 50)).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(1024).id("diamond");

	event.recipes.createoreexcavation.drilling([Item.of(S("rough_emerald")).withChance(0.1)], `{"text": "Emerald"}`, 5, 1000).fluid(Fluid.of(MC("water"), 1000)).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(1024).id("emerald");

	event.recipes.createoreexcavation.drilling(S("rough_lazurite"), `{"text": "Lazurite"}`, 5, 200).fluid(Fluid.of(MC("water"), 1000)).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("lapis");

	event.recipes.createoreexcavation.drilling(S("rough_cinnabar"), `{"text": "Cinnabar"}`, 10, 400).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("redstone");

	event.recipes.createoreexcavation.drilling(S("magnetite_chunk"), `{"text": "Magnetite"}`, 10, 200).veinSize(2, 10).biomeWhitelist(MC("is_overworld")).stress(512).id("iron");

	const addCrushing = (rocks, metals) => {
		rocks.forEach(rock => {
			metals.forEach(metal => {
				event.recipes.createCrushing([C(`crushed_raw_${metal}`), Item.of(C(`crushed_raw_${metal}`)).withChance(0.75), Item.of(C("experience_nugget")).withChance(0.75), Item.of(MC(rock)).withChance(0.12)], [S(`${rock}_${metal}_ore`)])
			})
		});
	}

	addCrushing(["granite", "tuff", "andesite", "diorite"], ["copper", "gold", "iron", "zinc"])

	event.recipes.createEmptying([Fluid.of(KJ("slime"), 100)], [MC("slime_ball")])

	event.recipes.createEmptying([Fluid.of(KJ("fine_sand"), 1000)], [KJ("sand_ball")])

	const CreateCobbleGeneratorRecipe = (items, fluids, outputs) => {
		// This is horrible, and I have to do it bless KubeJS
		for (let stubs = 0; stubs < 7; stubs++) {
			let ingredients = fluids.map((fluid) => (Fluid.of(fluid, 2 ** stubs)))
				.concat(items.map((item) => (Item.of(item))))

			for (let i = 0; i < stubs; i++) {
				ingredients.push(Item.of(KJ("profession_stub")))
			}

			let ingredients_2 = fluids.map((fluid) => (Fluid.of(fluid, 2 ** stubs)))
			.concat(items.map((item) => (Item.of(item))))

			if (stubs > 0) {
				ingredients_2.push(Item.of(KJ("profession_stub"), stubs))
			}

			let results = ingredients_2.concat(outputs.map((item) => (Item.of(item, 2 ** stubs))))

			event.recipes.createMixing(results, ingredients)
		}
	}

	CreateCobbleGeneratorRecipe([], [MC("lava"), MC("water")], [MC("cobblestone")])

	CreateCobbleGeneratorRecipe([], [MC("lava"), C("honey")], [C("limestone")])

	CreateCobbleGeneratorRecipe([], [MC("lava"), C("chocolate")], [C("scoria")])

	CreateCobbleGeneratorRecipe([MC("blue_ice"), MC("soul_soil")], [MC("lava")], [MC("basalt")])

	CreateCobbleGeneratorRecipe([], [CEI("ink"), MC("water")], [MC("blackstone")])

	event.recipes.createCompacting(KJ("silicon_compound"), [Fluid.of(KJ("fine_sand"), 500), KJ("coal_chunk")])

	event.recipes.createSplashing([Item.of(KJ("sand_ball")).withChance(0.0625)], [MC("sandstone")])

	event.recipes.createSplashing([MC("exposed_copper")], [MC("copper_block")])
	event.recipes.createSplashing([MC("weathered_copper")], [MC("exposed_copper")])
	event.recipes.createSplashing([MC("oxidized_copper")], [MC("weathered_copper")])

	event.replaceOutput({}, CBC("cast_iron_ingot"), CD("cast_iron_ingot"))
	event.replaceInput({}, CBC("cast_iron_ingot"), CD("cast_iron_ingot"))
	event.replaceInput({}, DD("cast_iron_billet"), CD("cast_iron_ingot"))

	event.recipes.createMixing([C("rose_quartz")], [MC("quartz"), MC("redstone"), MC("redstone"), MC("redstone"), MC("redstone")]).heated()

	event.shapeless(Q("limestone", 8), [F("#stone", 8), MC("lime_dye")])
	event.recipes.createCompacting(Q("shale"), [MC("clay")])
	event.recipes.createCompacting(Q("jasper"), [MC("red_sandstone")])
	event.recipes.createCompacting(Q("permafrost"), [MC("dirt"), MC("ice")])
	event.recipes.createMixing(Q("myalite"), [MC("popped_chorus_fruit"), MC("end_stone")])

	const MakePlankCuttingRecipes = (modFunc, woodType) => {
		if (modFunc == Q) {
			event.recipes.createCutting(modFunc(`${woodType}_planks_slab`, 2), modFunc(`${woodType}_planks`))

			event.recipes.createCutting(modFunc(`${woodType}_planks_stairs`), modFunc(`${woodType}_planks`))
		} else {
			event.recipes.createCutting(modFunc(`${woodType}_slab`, 2), modFunc(`${woodType}_planks`))

			event.recipes.createCutting(modFunc(`${woodType}_stairs`), modFunc(`${woodType}_planks`))
		}
		if (woodType == "crimson" || woodType == "warped") {
			event.recipes.createCutting(Q(`hollow_${woodType}_stem`), modFunc(`${woodType}_stem`))
			event.recipes.createSequencedAssembly(
				MC("barrel"),
				Q(`hollow_${woodType}_stem`),
				[
					event.recipes.createDeploying(KJ("incomplete_barrel"), [KJ("incomplete_barrel"), MC("#wooden_slabs")])
				]
			).transitionalItem(KJ("incomplete_barrel")).loops(2)
		} else if (woodType != "bamboo") {
			event.recipes.createCutting([Q(`hollow_${woodType}_log`)], [modFunc(`${woodType}_log`)])
			event.recipes.createSequencedAssembly(
				MC("barrel"),
				Q(`hollow_${woodType}_log`),
				[
					event.recipes.createDeploying(KJ("incomplete_barrel"), [KJ("incomplete_barrel"), MC("#wooden_slabs")])
				]
			).transitionalItem(KJ("incomplete_barrel")).loops(2)
		}
	}

	event.shapeless(MC("mushroom_stew"), [F("#mushrooms", 2), MC("bowl")])

	const vanillaWoods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped", "mangrove"]
	const quarkWoods = ["blossom", "azalea", "ancient", "bamboo"]

	vanillaWoods.map(wood => MakePlankCuttingRecipes(MC, wood))

	quarkWoods.map(wood => MakePlankCuttingRecipes(Q, wood))

	event.shaped(CH("wide_lantern"), [
		"LL",
	], {
		L: MC("lantern")
	})

	event.shaped(MC("name_tag"), [
		"SPA",
	], {
		S: MC("string"),
		P: MC("paper"),
		A: C("andesite_alloy"),
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
		event.recipes.createMixing([Fluid.of(KJ(`${tea}_tea`), 250)], [FR(`${tea}_tea_leaves`), FR(`${tea}_tea_leaves`), Fluid.of(MC("water"), 250)])

		event.recipes.createFilling([FR(`${tea}_tea`)], [MC("glass_bottle"), Fluid.of(KJ(`${tea}_tea`), 250)])
	}

	["green", "yellow", "black"].map(tea => CreateTea(tea))

	const infestedStones = ["stone", "cobblestone", "stone_bricks", "mossy_stone_bricks", "cracked_stone_bricks", "chiseled_stone_bricks", "deepslate"]
	infestedStones.map(key => event.recipes.createCrushing(Item.of(C("experience_nugget")).withChance(0.001), MC(`infested_${key}`)))

	event.recipes.createMixing([Fluid.of(KJ(`rose_hip_tea`), 250)], [FR("rose_hips"), FR("rose_hips"), Fluid.of(MC("water"), 250)]).heated()

	event.recipes.createFilling([FR("rose_hip_tea")], [MC("glass_bottle"), Fluid.of(KJ(`rose_hip_tea`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`dandelion_tea`), 250)], [MC("dandelion"), FR("#tea_leaves"), Fluid.of(MC("water"), 250)]).heated()

	event.recipes.createFilling([FR("dandelion_tea")], [MC("glass_bottle"), Fluid.of(KJ(`dandelion_tea`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`purulent_tea`), 250)], [MC("nether_wart"), MC("fermented_spider_eye"), Fluid.of(MC("water"), 250)]).heated()

	event.recipes.createFilling([FR("purulent_tea")], [MC("glass_bottle"), Fluid.of(KJ(`purulent_tea`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`gamblers_tea`), 250)], [FR("coffee_berries"), MC("glow_berries"), Fluid.of(MC("water"), 250)]).heated()

	event.recipes.createFilling([FR("gamblers_tea")], [MC("glass_bottle"), Fluid.of(KJ(`gamblers_tea`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`melon_juice`), 250)], [MC("melon_slice"), MC("melon_slice"), MC("melon_slice"), MC("melon_slice"), MC("sugar"), Fluid.of(MC("water"), 250)])

	event.recipes.createFilling([FD("melon_juice")], [MC("glass_bottle"), Fluid.of(KJ(`melon_juice`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`apple_cider`), 250)], [MC("apple"), MC("apple"), MC("sugar")]).heated()

	event.recipes.createFilling([FD("apple_cider")], [MC("glass_bottle"), Fluid.of(KJ(`apple_cider`), 250)])

	event.recipes.createMixing([Fluid.of(KJ(`sweet_berry_filling`), 1000)], [Item.of(MC("sweet_berries")), Item.of(MC("sweet_berries")), Item.of(MC("sweet_berries")), Item.of(MC("sweet_berries")), Item.of(MC("sweet_berries")), Item.of(MC("sweet_berries")), Fluid.of(MC("milk"), 500)])

	event.recipes.createFilling([FD("sweet_berry_cheesecake")], [FD("pie_crust"), Fluid.of(KJ(`sweet_berry_filling`), 1000)])

	event.recipes.createMixing([Fluid.of(KJ(`rose_hip_filling`), 1000)], [FR("rose_hips"), FR("rose_hips"), FR("rose_hips"), Fluid.of(MC("milk"), 500), Fluid.of(C("honey"), 250)])

	event.recipes.createFilling([FR("rose_hip_pie")], [FD("pie_crust"), Fluid.of(KJ(`rose_hip_filling`), 1000)])

	event.recipes.createMixing([Fluid.of(CCF(`ruby_chocolate`), 250)], [MC("sugar"), MC("cocoa_beans"), Fluid.of(MC("milk"), 250), Fluid.of(KJ("dragon_breath"), 250)])

	let CreateAlcohol = (drink) => {
		event.recipes.createFilling([BC(drink)], [BC("tankard"), Fluid.of(KJ(drink), 250)])

		event.recipes.createEmptying([Fluid.of(KJ(drink), 250), BC("tankard")], [BC(drink)])
	}

	["beer", "bloody_mary", "dread_nog", "egg_grog", "glittering_grenadine", "kombucha", "mead", "pale_jane", "red_rum", "rice_wine", "saccharine_rum", "salty_folly", "steel_toe_stout", "strongroot_ale", "vodka", "withering_dross"].map(drink => CreateAlcohol(drink))

	event.recipes.createCompacting([KJ("graham_cracker")], [C("dough"), MC("sugar")])
	event.recipes.createCompacting([KJ("graham_cracker")], [FD("wheat_dough"), MC("sugar")])
	event.shapeless(KJ("smore"), [KJ("graham_cracker", 2), CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("smore"), [KJ("graham_cracker", 2), CCF("black_chocolate_glazed_marshmallow")])
	event.shapeless(KJ("more_smore"), [KJ("smore", 2), CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("more_smore"), [KJ("smore", 2), CCF("black_chocolate_glazed_marshmallow")])
	event.shapeless(KJ("four_smore"), [KJ("more_smore", 2), CCF("bar_of_black_chocolate"), CCF("marshmallow")])
	event.shapeless(KJ("four_smore"), [KJ("more_smore", 2), CCF("black_chocolate_glazed_marshmallow")])

	event.shapeless(MC("bone_meal", 2), AM("bone_serpent_tooth"))
	event.shapeless(MC("bone_meal", 2), AM("gazelle_horn"))
	event.shapeless(MC("bone_meal", 2), AM("shark_tooth"))
	event.shapeless(MC("bone_meal", 2), AM("dropbear_claw"))
	event.shapeless(MC("bone_meal", 2), AM("cachalot_whale_tooth"))
	event.shapeless(MC("bone_meal", 2), AM("froststalker_horn"))
	event.shapeless(MC("bone_meal", 2), AM("serrated_shark_tooth"))

	event.recipes.createMixing([Fluid.of(CEI("hyper_experience"), 1)], [Fluid.of(CEI("experience"), 100), MC("lapis_lazuli"), MC("glow_ink_sac"), Q("ancient_fruit")]).superheated()

	//Chainges
	event.shaped(MC("chain", 8), [
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

	event.recipes.createEmptying([Item.of(MC("stick")).withChance(0.50), Item.of(MC("stick")).withChance(0.40), Item.of(MC("mangrove_propagule")).withChance(0.05)], [MC("muddy_mangrove_roots")])

	event.recipes.createEmptying([Item.of(MC("stick")).withChance(0.50), Item.of(MC("stick")).withChance(0.40)], [MC("mangrove_roots")])

	//End stone and dragons breath recipes
	event.recipes.createMixing([MC("end_stone")], [MC("cobblestone"), MC("popped_chorus_fruit")])
	event.recipes.createMixing([Fluid.of(KJ("dragon_breath"), 250), MC("dragon_head")], [MC("dragon_head"), MC("crying_obsidian")]).superheated()

	event.recipes.createFilling([MC("dragon_breath")], [MC("glass_bottle"), Fluid.of(KJ("dragon_breath"), 250)])
	event.recipes.createEmptying([MC("glass_bottle"), Fluid.of(KJ("dragon_breath"), 250)], [MC("dragon_breath")])
})