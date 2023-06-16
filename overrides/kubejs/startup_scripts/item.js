StartupEvents.registry("item", event => {
	event.create("incomplete_gearbox")
	event.create("incomplete_brass_hand")
	event.create("incomplete_barrel")
	event.create("incomplete_heart_of_diamond")
	event.create("steel_whisk")
	event.create("steel_propeller")
	event.create("profession_stub")
	event.create("lot_ticket")
	event.create("sand_ball")
	event.create("silicon_compound")
	event.create("coal_chunk")
	event.create("incomplete_coal_chunk")
	event.create("incomplete_circuit")
	event.create("incomplete_super_glue")
	event.create("circuit")

	event.create("graham_cracker").food(food => {
		food
			.hunger(5)
			.saturation(0.25)
	})
	event.create("smore").food(food => {
		food
			.hunger(8)
			.saturation(0.25)
	}).displayName("S'more")
	event.create("more_smore").food(food => {
		food
			.hunger(12)
			.saturation(0.25)
	}).displayName("More S'more Double S'mingot")
	event.create("four_smore").food(food => {
		food
			.hunger(20)
			.saturation(0.25)
	}).displayName("Four S'more Quad S'mingot")
})