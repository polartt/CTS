console.info("Bronze")

ServerEvents.recipes(event => {
    event.custom(Deploying([Item.of("#forge:stripped_logs"), Item.of(A("bronze_ingot"))], [Item.of(`2x ${C("copper_casing")}`)]))
	
	event.shaped("12x supplementaries:cog_block", [
		"BBB",
		"BRB",
		"BBB"
	], {
		B: A("bronze_ingot"),
		R: MC("redstone_block")
	})
	event.shaped(`2x ${C("display_link")}`, [
		"T",
		"C",
		"S"
	], {
		T: MC("redstone_torch"),
		C: C("brass_casing"),
		S: A("bronze_sheet")
	})
	event.shaped(`2x ${CA("capacitor")}`, [
		"S",
		"Z",
		"T"
	], {
		S: A("bronze_sheet"),
		Z: "#forge:plates/zinc",
		T: MC("redstone_torch")
	})
	event.shaped(`2x ${CA("capacitor")}`, [
		"Z",
		"S",
		"T"
	], {
		S: A("bronze_sheet"),
		Z: "#forge:plates/zinc",
		T: MC("redstone_torch")
	})
	event.shaped(`8x ${C("fluid_pipe")}`, [
		"S",
		"C",
		"S"
	], {
		S: A("bronze_sheet"),
		C: A("bronze_ingot")
	})
	event.shaped(`8x ${C("fluid_pipe")}`, [
		"SCS"
	], {
		S: A("bronze_sheet"),
		C: A("bronze_ingot")
	})
	event.shaped(`2x ${C("copper_valve_handle")}`, [
		"SSS",
		" A "
	], {
		S: A("bronze_sheet"),
		A: C("andesite_alloy")
	})
	event.shaped(`2x ${C("fluid_tank")}`, [
		"S",
		"B",
		"S"
	], {
		S: A("bronze_sheet"),
		B: MC("barrel")
	})
	event.shaped("2x farmersrespite:kettle", [
		"SLS",
		"IBI",
		"III"
	], {
		S: MC("stick"),
		L: MC("leather"),
		B: MC("bucket"),
		I: A("bronze_ingot")
	})
	event.shaped(`2x ${C("steam_whistle")}`, [
		"G",
		"B"
	], {
		G: C("golden_sheet"),
		B: A("bronze_ingot")
	})
	event.shaped(`2x ${C("steam_engine")}`, [
		"G",
		"A",
		"B"
	], {
		G: C("golden_sheet"),
		A: C("andesite_alloy"),
		B: A("bronze_block")
	})
})