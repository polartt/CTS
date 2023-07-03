console.info("Remove")

ServerEvents.recipes(event => {
	const RemoveDrawerUpgrades = (material) => {
		event.remove({output: SD(`${material}_storage_upgrade`)})
	}
	["iron", "gold", "diamond", "emerald", "obsidian"].map(material => RemoveDrawerUpgrades(material))
	event.remove({output: SD("compacting_drawers_3")})
	event.remove({output: SD("controller")})
	event.remove({output: SD("controller_slave")})
	event.remove({output: SP("faucet")})
	event.remove({id: A("mixing/steel_ingot")})
	event.remove({output: DD("cast_iron_billet")})
	event.remove({id: C("crafting/kinetics/super_glue")})
	event.remove({id: CEI("mixing/hyper_experience")})
	event.remove({output: CC("turtle_normal")})
	event.remove({output: CC("turtle_advanced")})
	event.remove({output: CC("computer_normal")})
	event.remove({output: CC("computer_advanced")})
	event.remove({output: CC("pocket_computer_normal")})
	event.remove({output: CC("pocket_computer_advanced")})
	event.remove({output: AP("overpowered_weak_automata_core")})
	event.remove({output: AP("weak_automata_core")})
	event.remove({output: AP("peripheral_casing")})
	event.remove({output: AP("chunk_controller")})
	event.remove({output: CL("single_chunk_loader")})
	event.remove({output: CL("basic_chunk_loader")})
	event.remove({output: CL("advanced_chunk_loader")})
	event.remove({output: CL("ultimate_chunk_loader")})
	event.remove({output: COE("drilling_machine")})
	event.remove({output: S("mineomite")})
	event.remove({id: COE("drilling/hardened_diamond")})
	event.remove({id: COE("drilling/diamond")})
	event.remove({id: COE("drilling/emerald")})
	event.remove({id: COE("drilling/iron")})
	event.remove({id: COE("drilling/redstone")})
	event.remove({id: MC("chain")})
	event.remove({output: AM("rocky_chestplate")})
	event.remove({output: AM("enderiophage_rocket")})
	event.remove({output: AM("transmutation_table")})

	const removeCrushing = (rocks, metals) => {
		rocks.forEach(rock => {
			metals.forEach(metal => {
				event.remove({id: S(`crushing/${rock}_${metal}_ore`)})
			})
		});
	}

	removeCrushing(["granite", "tuff", "andesite", "diorite"], ["copper", "gold", "iron", "zinc"])

	// event.remove({output: CBC("autocannon_breech_cast_mould")})
	// event.remove({output: CBC("autocannon_recoil_spring_cast_mould")})
	// event.remove({output: CBC("autocannon_barrel_cast_mould")})
	// event.remove({id: CBC("compacting/iron_to_cast_iron_ingot")})
})