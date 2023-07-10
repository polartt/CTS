console.info("Sequence")

ServerEvents.recipes(event => {
	event.recipes.createSequencedAssembly(
		[KJ("coal_chunk")],
		MC("#coals"),
		[
			event.recipes.createFilling([KJ("incomplete_coal_chunk")], [KJ("incomplete_coal_chunk"), Fluid.of(MC("water"), 500)]),
			event.recipes.createCutting([KJ("incomplete_coal_chunk")], [KJ("incomplete_coal_chunk")])
		]
	).transitionalItem(KJ("incomplete_coal_chunk")).loops(2)

	event.recipes.createSequencedAssembly(
		[C("gearbox")],
		C("andesite_casing"),
		[
			event.recipes.createDeploying([KJ("incomplete_gearbox")], [KJ("incomplete_gearbox"), C("cogwheel")])
		]
	).transitionalItem(KJ("incomplete_gearbox")).loops(2)

	event.recipes.createSequencedAssembly(
		[C("brass_hand")],
		C("andesite_alloy"),
		[
			event.recipes.createDeploying([KJ("incomplete_brass_hand")], [KJ("incomplete_brass_hand"), C("brass_nugget")])
		]
	).transitionalItem(KJ("incomplete_brass_hand")).loops(5)

	event.recipes.createSequencedAssembly(
		[Q("diamond_heart")],
		MC("diamond"),
		[
			event.recipes.createCutting([KJ("incomplete_heart_of_diamond")], [KJ("incomplete_heart_of_diamond")]),
			event.recipes.createFilling([KJ("incomplete_heart_of_diamond")], [KJ("incomplete_heart_of_diamond"), Fluid.of(CEI("hyper_experience"), 1000)]),
			event.recipes.createDeploying([KJ("incomplete_heart_of_diamond")], [KJ("incomplete_heart_of_diamond"), C("sturdy_sheet")]),
			event.recipes.createFilling([KJ("incomplete_heart_of_diamond")], [KJ("incomplete_heart_of_diamond"), Fluid.of(S("portal_fluid"), 1000)]),
			event.recipes.createPressing([KJ("incomplete_heart_of_diamond")], [KJ("incomplete_heart_of_diamond")])
		]
	).transitionalItem(KJ("incomplete_heart_of_diamond")).loops(3)

	event.recipes.createSequencedAssembly(
		[KJ("circuit")],
		KJ("silicon_compound"),
		[
			event.recipes.createPressing([KJ("incomplete_circuit")], [KJ("incomplete_circuit")]),
			event.recipes.createDeploying([KJ("incomplete_circuit")], [KJ("incomplete_circuit"), C("golden_sheet")]),
			event.recipes.createDeploying([KJ("incomplete_circuit")], [KJ("incomplete_circuit"), A("steel_sheet")]),
			event.recipes.createDeploying([KJ("incomplete_circuit")], [KJ("incomplete_circuit"), MC("redstone")]),
			event.recipes.createPressing([KJ("incomplete_circuit")], [KJ("incomplete_circuit")]),
			event.recipes.createDeploying([KJ("incomplete_circuit")], [KJ("incomplete_circuit"), A("bronze_sheet")]),
			event.recipes.createPressing([KJ("incomplete_circuit")], [KJ("incomplete_circuit")])
		]
	).transitionalItem(KJ("incomplete_circuit")).loops(3)

	event.recipes.createSequencedAssembly(
		[C("super_glue")],
		C("iron_sheet"),
		[
			event.recipes.createFilling([KJ("incomplete_super_glue")], [KJ("incomplete_super_glue"), Fluid.of(KJ("slime"), 100)]),
			event.recipes.createPressing([KJ("incomplete_super_glue")], [KJ("incomplete_super_glue")])
		]
	).transitionalItem(KJ("incomplete_super_glue")).loops(1)

	const MakeRailways = (material, nugget) => {
		event.recipes.createSequencedAssembly(
			[RW(`track_${material}`, 2)],
			MC(`${material}_slab`),
			[
				event.recipes.createDeploying([RW(`track_incomplete_${material}`)], [RW(`track_incomplete_${material}`), nugget]),
				event.recipes.createDeploying([RW(`track_incomplete_${material}`)], [RW(`track_incomplete_${material}`), nugget]),
				event.recipes.createPressing([RW(`track_incomplete_${material}`)], [RW(`track_incomplete_${material}`)])
			]
		).transitionalItem(RW(`track_incomplete_${material}`)).loops(1)
	}

	const steel = ["acacia", "birch", "dark_oak", "jungle", "oak", "spruce", "mangrove"]
	const bronze = ["crimson", "warped", "blackstone"]

	steel.map(wood => MakeRailways(wood, A("steel_nugget")))
	bronze.map(wood => MakeRailways(wood, A("bronze_nugget")))

	event.recipes.createSequencedAssembly(
		[RW("track_phantom", 64)],
		MC("phantom_membrane"),
		[
			event.recipes.createDeploying([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`), A("steel_nugget")]),
			event.recipes.createDeploying([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`), A("steel_nugget")]),
			event.recipes.createPressing([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`)])
		]
	).transitionalItem(RW(`track_incomplete_phantom`)).loops(1)

	event.recipes.createSequencedAssembly(
		[C("track", 2)],
		C("#sleepers"),
		[
			event.recipes.createDeploying([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`), A("steel_nugget")]),
			event.recipes.createDeploying([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`), A("steel_nugget")]),
			event.recipes.createPressing([RW(`track_incomplete_phantom`)], [RW(`track_incomplete_phantom`)])
		]
	).transitionalItem(C(`incomplete_track`)).loops(1)

	event.recipes.createSequencedAssembly(
		[RW("track_ender", 2)],
		MC("end_stone_brick_slab"),
		[
			event.recipes.createDeploying([RW(`track_incomplete_ender`)], [RW(`track_incomplete_ender`), A("steel_ingot")]),
			event.recipes.createDeploying([RW(`track_incomplete_ender`)], [RW(`track_incomplete_ender`), A("steel_ingot")]),
			event.recipes.createPressing([RW(`track_incomplete_ender`)], [RW(`track_incomplete_ender`)])
		]
	).transitionalItem(RW(`track_incomplete_ender`)).loops(1)

	event.recipes.createSequencedAssembly(
		[RW("track_tieless", 2)],
		MC("glass_pane"),
		[
			event.recipes.createDeploying([RW(`track_incomplete_tieless`)], [RW(`track_incomplete_tieless`), A("steel_nugget")]),
			event.recipes.createDeploying([RW(`track_incomplete_tieless`)], [RW(`track_incomplete_tieless`), A("steel_nugget")]),
			event.recipes.createPressing([RW(`track_incomplete_tieless`)], [RW(`track_incomplete_tieless`)])
		]
	).transitionalItem(RW(`track_incomplete_tieless`)).loops(1)

	event.recipes.createSequencedAssembly(
		[RW("track_monorail", 12)],
		C("metal_girder"),
		[
			event.recipes.createDeploying([RW(`track_incomplete_monorail`)], [RW(`track_incomplete_monorail`), C("metal_bracket")]),
			event.recipes.createDeploying([RW(`track_incomplete_monorail`)], [RW(`track_incomplete_monorail`), A("steel_sheet")]),
			event.recipes.createPressing([RW(`track_incomplete_monorail`)], [RW(`track_incomplete_monorail`)])
		]
	).transitionalItem(RW(`track_incomplete_monorail`)).loops(1)
})

