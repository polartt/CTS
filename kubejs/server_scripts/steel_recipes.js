console.info("Steel")

ServerEvents.recipes(event => {
	event.recipes.createMixing([Item.of(A("steel_ingot"))], [Item.of(MC("coal")), Item.of(MC("coal")), Item.of(MC("coal")), Item.of(MC("iron_ingot")), Item.of(C("limestone"))]).heated()
	event.recipes.createMixing([Item.of(A("steel_ingot"))], [Item.of(MC("charcoal")), Item.of(MC("charcoal")), Item.of(MC("charcoal")), Item.of(MC("iron_ingot")), Item.of(C("limestone"))]).heated()

  event.shapeless(MC("flint_and_steel", 2), [A("steel_ingot"), MC("flint")])
    
	event.shaped(MC("hopper", 2), [
		"S S",
		"SCS",
		" S "
	], {
		S: A("steel_ingot"),
		C: "#balm:wooden_chests"
	})

	event.shaped(FD("cooking_pot", 2), [
		"BWB",
		"SUS",
		"SSS"
	], {
		B: MC("brick"),
		W: MC("wooden_shovel"),
		U: MC("water_bucket"),
		S: A("steel_ingot")
	}).replaceIngredient({item: MC("water_bucket")}, MC("bucket"))

	event.shaped(C("mechanical_drill", 2), [
		" A ",
		"ASA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_ingot")
	})

	event.shaped(MC("minecart", 2), [
		"S S",
		"SSS"
	], {
		S: A("steel_ingot")
	})

	event.shaped(MC("cauldron", 2), [
		"S S",
		"S S",
		"SSS"
	], {
		S: A("steel_ingot")
	})

	event.shaped(MC("anvil", 2), [
		"BBB",
		" S ",
		"SSS"
	], {
		B: A("steel_block"),
		S: A("steel_ingot")
	})

	event.shaped(MC("piston", 2), [
		"WWW",
		"CSC",
		"CRC"
	], {
		W: "#minecraft:planks",
		C: MC("cobblestone"),
		R: MC("redstone"),
		S: A("steel_ingot")
	})

	event.shaped(C("metal_bracket", 8), [
		"NNN",
		"SAS"
	], {
		A: C("andesite_alloy"),
		N: A("steel_nugget"),
		S: A("steel_ingot")
	})

	event.shaped(KJ("steel_propeller"), [
		" P ",
		"PAP",
		" P "
	], {
		A: C("andesite_alloy"),
		P: A("steel_sheet")
	})

	event.shaped(KJ("steel_whisk"), [
		" A ",
		"PAP",
		"PPP"
	], {
		A: C("andesite_alloy"),
		P: A("steel_sheet")
	})

	event.shaped(C("encased_fan", 2), [
		"S",
		"C",
		"P"
	], {
		S: C("shaft"),
		C: C("andesite_casing"),
		P: KJ("steel_propeller")
	})

	event.shaped(C("mechanical_mixer", 2), [
		"S",
		"C",
		"P"
	], {
		S: C("cogwheel"),
		C: C("andesite_casing"),
		P: KJ("steel_whisk")
	})

	event.shaped(C("redstone_contact", 4), [
		" S ",
		"CRC",
		"CCC"
	], {
		C: MC("cobblestone"),
		R: MC("redstone"),
		S: A("steel_sheet")
	})

	event.shaped(C("mechanical_harvester", 2), [
		"ASA",
		"ASA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_sheet")
	})

	event.shaped(C("mechanical_plough", 2), [
		"SSS",
		"AAA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_sheet")
	})

	event.shaped(C("metal_girder", 16), [
		"SSS",
		"AAA"
	], {
		A: C("andesite_alloy"),
		S: A("steel_sheet")
	})

	event.shaped(C("electron_tube", 2), [
		"R",
		"S"
	], {
		R: C("polished_rose_quartz"),
		S: A("steel_sheet")
	})

	event.shaped(C("empty_blaze_burner", 2), [
		" P ",
		"PAP",
		" P "
	], {
		A: MC("netherrack"),
		P: A("steel_sheet")
	})

	event.shaped(C("item_vault", 2), [
		"P",
		"A",
		"P"
	], {
		A: MC("barrel"),
		P: A("steel_sheet")
	})

	event.shaped(C("mechanical_saw", 2), [
		" A ",
		"ASA",
		" C "
	], {
		A: A("steel_sheet"),
		C: C("andesite_casing"),
		S: A("steel_ingot")
	})

	event.shaped(C("chute", 8), [
		"P",
		"A",
		"P"
	], {
		A: A("steel_ingot"),
		P: A("steel_sheet")
	})

	event.shaped(CA("alternator", 2), [
		"  A  ",
		" SWS ",
		"SWRWS",
		" SCS "
	], {
		A: C("andesite_alloy"),
		W: "createaddition:copper_spool",
		C: "createaddition:capacitor",
		R: "createaddition:iron_rod",
		S: A("steel_sheet")
	})

	event.shaped(C("mechanical_press", 2), [
		"S",
		"C",
		"B"
	], {
		S: C("shaft"),
		C: C("andesite_casing"),
		B: A("steel_block")
	})

	event.shaped(MC("iron_bars", 32), [
		"III",
		"III"
	], {
		I: A("steel_ingot")
	})

	event.shaped(MC("iron_door", 6), [
		"II",
		"II",
		"II"
	], {
		I: A("steel_ingot")
	})

	event.shaped(MC("iron_trapdoor", 2), [
		"II",
		"II",
	], {
		I: A("steel_ingot")
	})

	event.shaped(CD("iron_hull", 4), [
		" I ",
		"I I",
		" I "
	], {
		I: A("steel_ingot")
	})

	event.shaped(CD("iron_mesh_fence", 4), [
		"ISI",
		"ISI"
	], {
		I: A("steel_ingot"),
		S: MC("string")
	})

	event.shaped(CD("iron_catwalk", 6), [
		" I ",
		"IBI",
		" I "
	], {
		I: A("steel_ingot"),
		B: CD("polished_iron_bars")
	})

	const lamps = ["yellow", "red", "green", "blue"]

	lamps.map(key =>
		event.shaped(CD(`${key}_iron_lamp`, 2), [
			"N",
			"T",
			"I"
		], {
			N: A("steel_nugget"),
			I: A("steel_ingot"),
			T: MC("torch")
		})
	)

	event.shaped(Q("iron_plate", 48), [
		"III",
		"I I",
		"III"
	], {
		I: A("steel_ingot")
	})

	event.shaped(Q("iron_plate", 48), [
		"I",
		"I",
		"E"
	], {
		I: A("steel_ingot"),
		E: MC("end_rod")
	})

	event.shaped(Q("iron_plate", 48), [
		"I",
		"I",
		"E"
	], {
		I: A("steel_ingot"),
		E: MC("end_rod")
	})

	event.shaped(Q("iron_ladder", 6), [
		"N N",
		"NIN",
		"N N"
	], {
		I: A("steel_ingot"),
		N: A("steel_nugget")
	})

	event.shaped(MC("chain", 16), [
		"N",
		"I",
		"N"
	], {
		I: A("steel_ingot"),
		N: A("steel_nugget")
	})

	event.shaped(DB("chain", 8), [
		"NN",
		"II",
		"NN"
	], {
		I: A("steel_ingot"),
		N: A("steel_nugget")
	})

	event.shaped(SP("iron_gate", 4), [
		"NIN",
		"NIN"
	], {
		I: A("steel_ingot"),
		N: A("steel_nugget")
	})

	event.shaped(SP("iron_gate", 4), [
		"AN",
		"NA"
	], {
		A: MC("andesite"),
		N: A("steel_nugget")
	})

	const mcWood = ["oak", "spruce", "birch", "dark_oak", "jungle", "acacia", "mangrove", "crimson", "warped"]

	mcWood.map(key =>
		event.shaped(SP(`hanging_sign_${key}`, 4), [
			"NSN",
			"WWW",
			"WWW"
		], {
			N: A("steel_nugget"),
			S: MC("stick"),
			W: MC(`${key}_planks`)
		})
	)

	const quarkWood = ["ancient", "blossom", "azalea", "bamboo"]

	quarkWood.map(key =>
		event.shaped(SP(`quark/hanging_sign_${key}`, 4), [
			"NSN",
			"WWW",
			"WWW"
		], {
			N: A("steel_nugget"),
			S: MC("stick"),
			W: Q(`${key}_planks`)
		})
	)

	event.shaped(MC("lantern", 2), [
		"NNN",
		"NIN",
		"NNN"
	], {
		I: MC("torch"),
		N: A("steel_nugget")
	})

	event.shaped(MC("soul_lantern", 2), [
		"NNN",
		"NIN",
		"NNN"
	], {
		I: MC("soul_torch"),
		N: A("steel_nugget")
	})

	event.shaped(DD("redstone_lantern", 2), [
		"NNN",
		"NIN",
		"NNN"
	], {
		I: MC("redstone_torch"),
		N: A("steel_nugget")
	})

	event.shaped(DD("large_lantern", 2), [
		"III",
		"TTT",
		"III"
	], {
		I: A("steel_ingot"),
		T: MC("torch")
	})

	event.shaped(DD("large_soul_lantern", 2), [
		"III",
		"TTT",
		"III"
	], {
		I: A("steel_ingot"),
		T: MC("soul_torch")
	})

	event.shaped(DD("large_redstone_lantern", 2), [
		"III",
		"TTT",
		"III"
	], {
		I: A("steel_ingot"),
		T: MC("redstone_torch")
	})

	event.shaped(RW("smokestack_caboosestyle", 2), [
		"NIN",
		" C "
	], {
		I: A("steel_sheet"),
		N: A("steel_nugget"),
		C: MC("campfire")
	})

	event.shaped(RW("smokestack_long", 2), [
		"NCN",
	], {
		N: A("steel_nugget"),
		C: MC("campfire")
	})

	event.shaped(RW("smokestack_coalburner", 2), [
		"I I",
		"I I",
		"ICI",
	], {
		I: A("steel_sheet"),
		C: MC("campfire")
	})

	event.shaped(RW("smokestack_oilburner", 2), [
		"I I",
		"ICI",
	], {
		I: A("steel_sheet"),
		C: MC("campfire")
	})

	event.shaped(RW("smokestack_woodburner", 2), [
		"NIN",
		"ICI",
	], {
		I: A("steel_sheet"),
		N: A("steel_nugget"),
		C: MC("campfire")
	})

	event.shaped(C("filter", 2), [
		"NWN"
	], {
		N: A("steel_nugget"),
		W: MC("#wool")
	})

	event.shaped(C("ornate_iron_window", 2), [
		" N ",
		"NGN"
	], {
		N: A("steel_nugget"),
		G: F("#glass/colorless")
	})

	event.shaped(SP("sconce", 2), [
		"NTN",
		" N "
	], {
		N: A("steel_nugget"),
		T: MC("torch")
	})

	event.shaped(SP("sconce_soul", 2), [
		"NTN",
		" N "
	], {
		N: A("steel_nugget"),
		T: MC("soul_torch")
	})

	const colors = ["white", "light_gray", "gray", "black", "red", "orange", "yellow", "lime", "green", "light_blue", "blue", "cyan", "pink", "magenta", "purple", "brown"]
	
	colors.map(key =>
		event.shapeless(CD(`${key}_decal`, 2), [MC(`${key}_dye`), A("steel_sheet")])
	)

	event.shaped(RW("track_coupler", 2), [
		"S",
		"R",
		"C"
	], {
		S: A("steel_sheet"),
		R: MC("redstone"),
		C: C("railway_casing")
	})

	event.shapeless(C("fluid_valve", 2), [C("fluid_pipe"), A("steel_sheet")])

	event.shaped(RW("smokestack_diesel", 2), [
		"SPS"
	], {
		P: KJ("steel_propeller"),
		S: A("steel_sheet")
	})

	event.shaped(C("elevator_pulley", 2), [
		"B",
		"D",
		"S"
	], {
		B: C("brass_casing"),
		D: MC("dried_kelp_block"),
		S: A("steel_sheet")
	})

	event.shaped(CEI("printer", 2), [
		"C",
		"D",
		"S"
	], {
		C: C("copper_casing"),
		D: MC("dried_kelp"),
		S: A("steel_sheet")
	})

	event.shaped(RW("semaphore", 8), [
		" S ",
		"FCE",
		" S "
	], {
		C: C("andesite_casing"),
		F: MC("#fences"),
		S: A("steel_sheet"),
		E: C("electron_tube")
	})

	event.shapeless(Q("iron_button"), [MC("#wooden_buttons"), A("steel_ingot")])

	event.recipes.createMixing(C("andesite_alloy"), [MC("andesite"), A("steel_nugget")])

	event.shapeless(C("encased_chain_drive", 2), [C("andesite_casing"), A("steel_nugget", 3)])

	event.stonecutting(C("industrial_iron_block", 4), A("steel_ingot"))
	event.stonecutting(CD("polished_iron_bars", 8), A("steel_ingot"))
	event.stonecutting(CD("iron_sheet_metal", 8), A("steel_block"))
	event.stonecutting(CD("iron_ladder", 4), A("steel_sheet"))
})