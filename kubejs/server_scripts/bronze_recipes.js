console.info("Bronze")

ServerEvents.recipes(event => {
  event.recipes.createDeploying(C("copper_casing", 2), [F("#stripped_logs"), A("bronze_ingot")])
	
	event.shaped(SP("cog_block", 12), [
		"BBB",
		"BRB",
		"BBB"
	], {
		B: A("bronze_ingot"),
		R: MC("redstone_block")
	})

	event.shaped(C("display_link", 2), [
		"T",
		"C",
		"S"
	], {
		T: MC("redstone_torch"),
		C: C("brass_casing"),
		S: A("bronze_sheet")
	})

	event.shaped(CA("capacitor", 2), [
		"S",
		"Z",
		"T"
	], {
		S: A("bronze_sheet"),
		Z: F("#plates/zinc"),
		T: MC("redstone_torch")
	})

	event.shaped(CA("capacitor", 2), [
		"Z",
		"S",
		"T"
	], {
		S: A("bronze_sheet"),
		Z: F("#plates/zinc"),
		T: MC("redstone_torch")
	})

	event.shaped(C("fluid_pipe", 16), [
		"S",
		"C",
		"S"
	], {
		S: A("bronze_sheet"),
		C: A("bronze_ingot")
	})

	event.shaped(C("fluid_pipe", 16), [
		"SCS"
	], {
		S: A("bronze_sheet"),
		C: A("bronze_ingot")
	})

	event.shaped(C("copper_valve_handle", 2), [
		"SSS",
		" A "
	], {
		S: A("bronze_sheet"),
		A: C("andesite_alloy")
	})

	event.shaped(C("fluid_tank", 2), [
		"S",
		"B",
		"S"
	], {
		S: A("bronze_sheet"),
		B: MC("barrel")
	})

	event.shaped(FR("kettle", 2), [
		"SLS",
		"IBI",
		"III"
	], {
		S: MC("stick"),
		L: MC("leather"),
		B: MC("bucket"),
		I: A("bronze_ingot")
	})

	event.shaped(C("attribute_filter", 2), [
		"NWN"
	], {
		N: A("bronze_nugget"),
		W: MC("#wool")
	})

	event.shaped(C("steam_whistle", 2), [
		"G",
		"B"
	], {
		G: C("golden_sheet"),
		B: A("bronze_ingot")
	})

	event.shaped(C("steam_engine", 2), [
		"G",
		"A",
		"B"
	], {
		G: C("golden_sheet"),
		A: C("andesite_alloy"),
		B: A("bronze_block")
	})

	event.shaped(C("hose_pulley", 2), [
		"C",
		"D",
		"S"
	], {
		C: C("copper_casing"),
		D: MC("dried_kelp_block"),
		S: A("bronze_sheet")
	})

	event.stonecutting(C("copper_ladder", 4), A("bronze_ingot"))
	event.stonecutting(C("copper_bars", 8), A("bronze_ingot"))
	event.stonecutting(CD("copper_bars", 8), A("bronze_ingot"))
	event.stonecutting(C("copper_scaffolding", 4), A("bronze_ingot"))
	event.stonecutting(C("copper_tiles", 4), A("bronze_ingot"))
	event.stonecutting(C("copper_shingles", 4), A("bronze_ingot"))
})