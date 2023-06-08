console.info("Tags")

ServerEvents.tags("item", event => {
	event.add("forge:mushrooms", "quark:glow_shroom")
	event.add("forge:mushrooms", "spelunkery:inkcap_mushroom")
	event.add("forge:mushrooms", "spelunkery:white_inkcap_mushroom")
	event.add("forge:mushrooms", "spelunkery:button_mushroom")
})