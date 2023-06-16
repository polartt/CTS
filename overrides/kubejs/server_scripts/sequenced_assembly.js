console.info("Sequence")

ServerEvents.recipes(event => {
	event.custom(SequencedAssembly(
		Item.of(MC("coal")),
		Item.of(KJ("incomplete_coal_chunk")),
		[
			Filling([Item.of(KJ("incomplete_coal_chunk")), {"fluid": MC("water"), "amount": 500}], [Item.of(KJ("incomplete_coal_chunk"))]),
			Cutting([Item.of(KJ("incomplete_coal_chunk"))], [Item.of(KJ("incomplete_coal_chunk"))])
		],
		[Item.of(KJ("coal_chunk"))],
		2
	))

	event.custom(SequencedAssembly(
		Item.of(C("andesite_casing")),
		Item.of(KJ("incomplete_gearbox")),
		[
			Deploying([Item.of(KJ("incomplete_gearbox")), Item.of(C("cogwheel"))], [Item.of(KJ("incomplete_gearbox"))])
		],
		[Item.of(C("gearbox"))],
		2
	))

	event.custom(SequencedAssembly(
		Item.of(C("andesite_alloy")),
		Item.of(KJ("incomplete_brass_hand")),
		[
			Deploying([Item.of(KJ("incomplete_brass_hand")), Item.of(C("brass_nugget"))], [Item.of(KJ("incomplete_brass_hand"))])
		],
		[Item.of(C("brass_hand"))],
		5
	))

	event.custom(SequencedAssembly(
		Item.of(MC("diamond")),
		Item.of(KJ("incomplete_heart_of_diamond")),
		[
			Cutting([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond"))]),
			Filling([Item.of(KJ("incomplete_heart_of_diamond")), {"fluid": CEI("hyper_experience"), "amount": 1000}], [Item.of(KJ("incomplete_heart_of_diamond"))]),
			Deploying([Item.of(KJ("incomplete_heart_of_diamond")), Item.of(C("sturdy_sheet"))], [Item.of(KJ("incomplete_heart_of_diamond"))]),
			Filling([Item.of(KJ("incomplete_heart_of_diamond")), {"fluid": S("portal_fluid"), "amount": 1000}], [Item.of(KJ("incomplete_heart_of_diamond"))]),
			Pressing([Item.of(KJ("incomplete_heart_of_diamond"))], [Item.of(KJ("incomplete_heart_of_diamond"))])
		],
		[Item.of(Q("diamond_heart"))],
		3
	))

	event.custom(SequencedAssembly(
		Item.of(KJ("silicon_compound")),
		Item.of(KJ("incomplete_circuit")),
		[
			Pressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))]),
			Deploying([Item.of(KJ("incomplete_circuit")), Item.of(C("golden_sheet"))], [Item.of(KJ("incomplete_circuit"))]),
			Deploying([Item.of(KJ("incomplete_circuit")), Item.of(MC("redstone"))], [Item.of(KJ("incomplete_circuit"))]),
			Pressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))]),
			Deploying([Item.of(KJ("incomplete_circuit")), Item.of(C("copper_sheet"))], [Item.of(KJ("incomplete_circuit"))]),
			Pressing([Item.of(KJ("incomplete_circuit"))], [Item.of(KJ("incomplete_circuit"))])
		],
		[Item.of(KJ("circuit"))],
		3
	))

	event.custom(SequencedAssembly(
		Item.of(C("iron_sheet")),
		Item.of(KJ("incomplete_super_glue")),
		[
			Filling([Item.of(KJ("incomplete_super_glue")), {"fluid": KJ("slime"), "amount": 100}], [Item.of(KJ("incomplete_super_glue"))]),
			Pressing([Item.of(KJ("incomplete_super_glue"))], [Item.of(KJ("incomplete_super_glue"))])
		],
		[Item.of(C("super_glue"))],
		1
	))

	const MakeRailways = (material, nugget) => {
		event.custom(SequencedAssembly(
			Item.of(MC(`${material}_slab`)),
			Item.of(RW(`track_incomplete_${material}`)),
			[
				Deploying([Item.of(RW(`track_incomplete_${material}`)), Item.of(nugget)], [Item.of(RW(`track_incomplete_${material}`))]),
				Deploying([Item.of(RW(`track_incomplete_${material}`)), Item.of(nugget)], [Item.of(RW(`track_incomplete_${material}`))]),
				Pressing([Item.of(RW(`track_incomplete_${material}`))], [Item.of(RW(`track_incomplete_${material}`))])
			],
			[Item.of(`2x ${RW(`track_${material}`)}`)],
			1
		))
	}

	const steel = ["acacia", "birch", "dark_oak", "jungle", "oak", "spruce", "mangrove"]
	const bronze = ["crimson", "warped", "blackstone"]

	steel.map(wood => MakeRailways(wood, A("steel_nugget")))
	bronze.map(wood => MakeRailways(wood, A("bronze_nugget")))

	event.custom(SequencedAssembly(
		Item.of(MC("phantom_membrane")),
		Item.of(RW(`track_incomplete_phantom`)),
		[
			Deploying([Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))], [Item.of(RW(`track_incomplete_phantom`))]),
			Deploying([Item.of(RW(`track_incomplete_phantom`)), Item.of(A("steel_nugget"))], [Item.of(RW(`track_incomplete_phantom`))]),
			Pressing([Item.of(RW(`track_incomplete_phantom`))], [Item.of(RW(`track_incomplete_phantom`))])
		],
		[Item.of(`64x ${RW(`track_phantom`)}`)],
		1
	))

	event.custom(SequencedAssembly(
		Item.of(`#${C("sleepers")}`),
		Item.of(C(`incomplete_track`)),
		[
			Deploying([Item.of(C(`incomplete_track`)), Item.of(A("steel_nugget"))], [Item.of(C(`incomplete_track`))]),
			Deploying([Item.of(C(`incomplete_track`)), Item.of(A("steel_nugget"))], [Item.of(C(`incomplete_track`))]),
			Pressing([Item.of(C(`incomplete_track`))], [Item.of(C(`incomplete_track`))])
		],
		[Item.of(`2x ${C(`track`)}`)],
		1
	))

	event.custom(SequencedAssembly(
		Item.of(MC("end_stone_brick_slab")),
		Item.of(RW(`track_incomplete_ender`)),
		[
			Deploying([Item.of(RW(`track_incomplete_ender`)), Item.of(A("steel_ingot"))], [Item.of(RW(`track_incomplete_ender`))]),
			Deploying([Item.of(RW(`track_incomplete_ender`)), Item.of(A("steel_ingot"))], [Item.of(RW(`track_incomplete_ender`))]),
			Pressing([Item.of(RW(`track_incomplete_ender`))], [Item.of(RW(`track_incomplete_ender`))])
		],
		[Item.of(`2x ${RW(`track_ender`)}`)],
		1
	))

	event.custom(SequencedAssembly(
		Item.of(MC("glass_pane")),
		Item.of(RW(`track_incomplete_tieless`)),
		[
			Deploying([Item.of(RW(`track_incomplete_tieless`)), Item.of(A("steel_nugget"))], [Item.of(RW(`track_incomplete_tieless`))]),
			Deploying([Item.of(RW(`track_incomplete_tieless`)), Item.of(A("steel_nugget"))], [Item.of(RW(`track_incomplete_tieless`))]),
			Pressing([Item.of(RW(`track_incomplete_tieless`))], [Item.of(RW(`track_incomplete_tieless`))])
		],
		[Item.of(`2x ${RW(`track_tieless`)}`)],
		1
	))

	event.custom(SequencedAssembly(
		Item.of(C("metal_girder")),
		Item.of(RW(`track_incomplete_monorail`)),
		[
			Deploying([Item.of(RW(`track_incomplete_monorail`)), Item.of(C("metal_bracket"))], [Item.of(RW(`track_incomplete_monorail`))]),
			Deploying([Item.of(RW(`track_incomplete_monorail`)), Item.of(A("steel_sheet"))], [Item.of(RW(`track_incomplete_monorail`))]),
			Pressing([Item.of(RW(`track_incomplete_monorail`))], [Item.of(RW(`track_incomplete_monorail`))])
		],
		[Item.of(`12x ${RW(`track_monorail`)}`)],
		1
	))
})

