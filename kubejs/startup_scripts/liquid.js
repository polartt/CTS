StartupEvents.registry("fluid", event => {
	const simpleLiquid = (name, hex) => {
		event.create(name).thickTexture(hex).noBucket().noBlock()
	}
	event.create("fine_sand").displayName("Fine Sand").stillTexture(KJ("fluid/fine_sand_still")).flowingTexture(KJ("fluid/fine_sand_flow")).bucketColor(0xE3DBB0)

	simpleLiquid("green_tea", 0x9FA63B)

	simpleLiquid("yellow_tea", 0xA98341)

	simpleLiquid("black_tea", 0x773D27)

	simpleLiquid("rose_hip_tea", 0xBD2528)

	simpleLiquid("dandelion_tea", 0xE3CB6B)

	simpleLiquid("purulent_tea", 0xBC3E49)

	simpleLiquid("gamblers_tea", 0x735E3F)

	simpleLiquid("apple_cider", 0xDDAD78)

	simpleLiquid("melon_juice", 0xF75D38)

	simpleLiquid("sweet_berry_filling", 0xA30700)

	simpleLiquid("rose_hip_filling", 0xEA2F2B)

	simpleLiquid("slime", 0x8AD480)

	simpleLiquid("beer", 0xEEDC69)
	
	simpleLiquid("bloody_mary", 0x84160d)

	simpleLiquid("dread_nog", 0xe1f5dd)
	
	simpleLiquid("egg_grog", 0xddf3f5)
	
	simpleLiquid("glittering_grenadine", 0xf5a55e)
	
	simpleLiquid("kombucha", 0x7b712c)
	
	simpleLiquid("mead", 0xff9116)
	
	simpleLiquid("pale_jane", 0xeee7d0)
	
	simpleLiquid("red_rum", 0x730408)
	
	simpleLiquid("rice_wine", 0xeaeebd)
	
	simpleLiquid("saccharine_rum", 0xa50700)
	
	simpleLiquid("salty_folly", 0x38672d)
	
	simpleLiquid("steel_toe_stout", 0xaea8a8)
	
	simpleLiquid("strongroot_ale", 0xbc4a4f)
	
	simpleLiquid("vodka", 0xddeee9)
	
	simpleLiquid("withering_dross", 0x191411)
	
	simpleLiquid("dragon_breath", 0xc54883)
})