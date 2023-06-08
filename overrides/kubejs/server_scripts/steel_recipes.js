console.info("Steel")

ServerEvents.recipes(event => {
	event.custom(HeatedMixing([Item.of(`#${MC("coals")}`), Item.of(`#${MC("coals")}`), Item.of(`#${MC("coals")}`), Item.of(MC("iron_ingot")), Item.of(Q("limestone"))], [Item.of(A("steel_ingot"))]))

    event.shapeless(`2x ${MC("flint_and_steel")}`, [A("steel_ingot"), MC("flint")])
    
	event.shaped(`2x ${MC("hopper")}`, [
		"S S",
		"SCS",
		" S "
	], {
		S: A("steel_ingot"),
		C: "#balm:wooden_chests"
	})

	event.shaped(`2x ${FD("cooking_pot")}`, [
		"BWB",
		"SUS",
		"SSS"
	], {
		B: MC("brick"),
		W: MC("wooden_shovel"),
		U: MC("water_bucket"),
		S: A("steel_ingot")
	}).replaceIngredient({item: MC("water_bucket")}, MC("bucket"))

	event.shaped(`2x ${C("mechanical_drill")}`, [
		" A ",
		"ASA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_ingot")
	})

	event.shaped(`2x ${MC("minecart")}`, [
		"   ",
		"S S",
		"SSS"
	], {
		S: A("steel_ingot")
	})

	event.shaped(`2x ${MC("cauldron")}`, [
		"S S",
		"S S",
		"SSS"
	], {
		S: A("steel_ingot")
	})

	event.shaped(`2x ${MC("anvil")}`, [
		"BBB",
		" S ",
		"SSS"
	], {
		B: A("steel_block"),
		S: A("steel_ingot")
	})

	event.shaped(`2x ${MC("piston")}`, [
		"WWW",
		"CSC",
		"CRC"
	], {
		W: "#minecraft:planks",
		C: MC("cobblestone"),
		R: MC("redstone"),
		S: A("steel_ingot")
	})

	event.shaped(`8x ${C("metal_bracket")}`, [
		"   ",
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

	event.shaped(`2x ${C("encased_fan")}`, [
		" S ",
		" C ",
		" P "
	], {
		S: C("shaft"),
		C: C("andesite_casing"),
		P: KJ("steel_propeller")
	})

	event.shaped(`2x ${C("mechanical_mixer")}`, [
		" S ",
		" C ",
		" P "
	], {
		S: C("cogwheel"),
		C: C("andesite_casing"),
		P: KJ("steel_whisk")
	})

	event.shaped(`2x ${C("redstone_contact")}`, [
		" S ",
		"CRC",
		"CCC"
	], {
		C: MC("cobblestone"),
		R: MC("redstone"),
		S: A("steel_sheet")
	})

	event.shaped(`2x ${C("mechanical_harvester")}`, [
		"ASA",
		"ASA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_sheet")
	})

	event.shaped(`2x ${C("mechanical_plough")}`, [
		"SSS",
		"AAA",
		" C "
	], {
		A: C("andesite_alloy"),
		C: C("andesite_casing"),
		S: A("steel_sheet")
	})

	event.shaped(`16x ${C("metal_girder")}`, [
		"   ",
		"SSS",
		"AAA"
	], {
		A: C("andesite_alloy"),
		S: A("steel_sheet")
	})

	event.shaped(`2x ${C("electron_tube")}`, [
		"R",
		"S"
	], {
		R: C("polished_rose_quartz"),
		S: A("steel_sheet")
	})

	event.shaped(`2x ${C("empty_blaze_burner")}`, [
		" P ",
		"PAP",
		" P "
	], {
		A: MC("netherrack"),
		P: A("steel_sheet")
	})

	event.shaped(`2x ${C("item_vault")}`, [
		" P ",
		" A ",
		" P "
	], {
		A: MC("barrel"),
		P: A("steel_sheet")
	})

	event.shaped(`2x ${C("mechanical_saw")}`, [
		" A ",
		"ASA",
		" C "
	], {
		A: A("steel_sheet"),
		C: C("andesite_casing"),
		S: A("steel_ingot")
	})

	event.shaped(`8x ${C("chute")}`, [
		" P ",
		" A ",
		" P "
	], {
		A: A("steel_ingot"),
		P: A("steel_sheet")
	})

	event.shaped("2x createaddition:alternator", [
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

	event.shaped(`2x ${C("mechanical_press")}`, [
		" S ",
		" C ",
		" B "
	], {
		S: C("shaft"),
		C: C("andesite_casing"),
		B: A("steel_block")
	})
    
	event.shapeless(`2x ${C("encased_chain_drive")}`, [C("andesite_casing"), "3x alloyed:steel_nugget"])
})