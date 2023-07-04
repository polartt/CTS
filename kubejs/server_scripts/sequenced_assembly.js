console.info("Sequence")

ServerEvents.recipes(event => {
	event.recipes.createSequencedAssembly(
		[Item.of(KJ("coal_chunk"))],
		Item.of(MC("coal")),
		[
			event.recipes.createFilling([Item.of(KJ("incomplete_coal_chunk"))], [Item.of(KJ("incomplete_coal_chunk")), Fluid.of(MC("water"), 500)]),
			event.recipes.createCutting([Item.of(KJ("incomplete_coal_chunk"))], [Item.of(KJ("incomplete_coal_chunk"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_coal_chunk"))).loops(2)

	event.recipes.createSequencedAssembly(
		[Item.of(C("gearbox"))],
		Item.of(C("andesite_casing")),
		[
			event.recipes.createDeploying([Item.of(KJ("incomplete_gearbox"))], [Item.of(KJ("incomplete_gearbox")), Item.of(C("cogwheel"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_gearbox"))).loops(2)

	event.recipes.createSequencedAssembly(
		[Item.of(C("brass_hand"))],
		Item.of(C("andesite_alloy")),
		[
			event.recipes.createDeploying([Item.of(KJ("incomplete_brass_hand"))], [Item.of(KJ("incomplete_brass_hand")), Item.of(C("brass_nugget"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_brass_hand"))).loops(5)

	event.recipes.createSequencedAssembly(
		[Item.of(Q("diamond_heart"))],
		Item.of(MC("diamond")),
		[
			event.recipes.createCutting([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond"))]),
			event.recipes.createFilling([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond")), Fluid.of(CEI("hyper_experience"), 1000)]),
			event.recipes.createDeploying([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond")), Item.of(C("sturdy_sheet"))]),
			event.recipes.createFilling([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond")), Fluid.of(S("portal_fluid"), 1000)]),
			event.recipes.createPressing([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_heart_of_diamond"))).loops(3)

	event.recipes.createSequencedAssembly(
		[Item.of(KJ("circuit"))],
		Item.of(KJ("silicon_compound")),
		[
			event.recipes.createPressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))]),
			event.recipes.createDeploying([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit")), Item.of(C("golden_sheet"))]),
			event.recipes.createDeploying([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit")), Item.of(MC("redstone"))]),
			event.recipes.createPressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))]),
			event.recipes.createDeploying([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit")), Item.of(C("copper_sheet"))]),
			event.recipes.createPressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_circuit"))).loops(3)

	event.recipes.createSequencedAssembly(
		[Item.of(C("super_glue"))],
		Item.of(C("iron_sheet")),
		[
			event.recipes.createFilling([Item.of(KJ("incomplete_super_glue"))], [Item.of(KJ("incomplete_super_glue")), Fluid.of(KJ("slime"), 100)]),
			event.recipes.createPressing([Item.of(KJ("incomplete_super_glue"))], [Item.of(KJ("incomplete_super_glue"))])
		]
	).transitionalItem(Item.of(KJ("incomplete_super_glue"))).loops(1)

	const MakeRailways = (material, nugget) => {
		event.recipes.createSequencedAssembly(
			[Item.of(RW(`track_${material}`, 2))],
			Item.of(MC(`${material}_slab`)),
			[
				event.recipes.createDeploying([Item.of(RW(`track_incomplete_${material}`))], [Item.of(RW(`track_incomplete_${material}`)), Item.of(nugget)]),
				event.recipes.createDeploying([Item.of(RW(`track_incomplete_${material}`))], [Item.of(RW(`track_incomplete_${material}`)), Item.of(nugget)]),
				event.recipes.createPressing([Item.of(RW(`track_incomplete_${material}`))], [Item.of(RW(`track_incomplete_${material}`))])
			]
		).transitionalItem(Item.of(RW(`track_incomplete_${material}`))).loops(1)
	}

	const steel = ["acacia", "birch", "dark_oak", "jungle", "oak", "spruce", "mangrove"]
	const bronze = ["crimson", "warped", "blackstone"]

	steel.map(wood => MakeRailways(wood, A("steel_nugget")))
	bronze.map(wood => MakeRailways(wood, A("bronze_nugget")))

	event.recipes.createSequencedAssembly(
		[Item.of(RW("track_phantom", 64))],
		Item.of(MC("phantom_membrane")),
		[
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))]),
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))]),
			event.recipes.createPressing([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`))])
		]
	).transitionalItem(Item.of(RW(`track_incomplete_phantom`))).loops(1)

	event.recipes.createSequencedAssembly(
		[Item.of(C("track", 2))],
		C("#sleepers"),
		[
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))]),
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))]),
			event.recipes.createPressing([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`))])
		]
	).transitionalItem(Item.of(C(`incomplete_track`))).loops(1)

	event.recipes.createSequencedAssembly(
		[Item.of(RW("track_ender", 2))],
		Item.of(MC("end_stone_brick_slab")),
		[
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_ender`))], [Item.of(RW(`track_incomplete_ender`)), Item.of(A("steel_ingot"))]),
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_ender`))], [Item.of(RW(`track_incomplete_ender`)), Item.of(A("steel_ingot"))]),
			event.recipes.createPressing([Item.of(RW(`track_incomplete_ender`))], [Item.of(RW(`track_incomplete_ender`))])
		]
	).transitionalItem(Item.of(RW(`track_incomplete_ender`))).loops(1)

	event.recipes.createSequencedAssembly(
		[Item.of(RW("track_tieless", 2))],
		Item.of(MC("glass_pane")),
		[
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_tieless`))], [Item.of(RW(`track_incomplete_tieless`)), Item.of(A("steel_nugget"))]),
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_tieless`))], [Item.of(RW(`track_incomplete_tieless`)), Item.of(A("steel_nugget"))]),
			event.recipes.createPressing([Item.of(RW(`track_incomplete_tieless`))], [Item.of(RW(`track_incomplete_tieless`))])
		]
	).transitionalItem(Item.of(RW(`track_incomplete_tieless`))).loops(1)

	event.recipes.createSequencedAssembly(
		[Item.of(RW("track_monorail", 12))],
		Item.of(C("metal_girder")),
		[
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_monorail`))], [Item.of(RW(`track_incomplete_monorail`)), Item.of(C("metal_bracket"))]),
			event.recipes.createDeploying([Item.of(RW(`track_incomplete_monorail`))], [Item.of(RW(`track_incomplete_monorail`)), Item.of(A("steel_sheet"))]),
			event.recipes.createPressing([Item.of(RW(`track_incomplete_monorail`))], [Item.of(RW(`track_incomplete_monorail`))])
		]
	).transitionalItem(Item.of(RW(`track_incomplete_monorail`))).loops(1)
})

