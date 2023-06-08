const MC = (id) => `minecraft:${id}`
const C = (id) => `create:${id}`
const KJ = (id) => `kubejs:${id}`
const CC = (id) => `computercraft:${id}`
const AP = (id) => `advancedperipherals:${id}`
const SD = (id) => `storagedrawers:${id}`
const CBC = (id) => `createbigcannons:${id}`
const DD = (id) => `dustrial_decor:${id}`
const A = (id) => `alloyed:${id}`
const CA = (id) => `createaddition:${id}`
const CEI = (id) => `create_enchantment_industry:${id}`
const CL = (id) => `chunkloaders:${id}`
const BC = (id) => `brewinandchewin:${id}`
const CH = (id) => `chipped:${id}`
const Q = (id) => `quark:${id}`
const FD = (id) => `farmersdelight:${id}`
const S = (id) => `spelunkery:${id}`
const RW = (id) => `railways:${id}`
const F = (id) => `forge:${id}`
const CCF = (id) => `create_confectionery:${id}`
const CD = (id) => `createdeco:${id}`
const COE = (id) => `createoreexcavation:${id}`

const CreateCobbleGeneratorRecipe = (items, fluids, outputs) => {
	const ingredients = fluids.map((fluid) => ({ "amount": 1, "fluid": fluid }))
		.concat(items.map((item) => ({ "item": item })));

	const results = ingredients.concat(outputs.map((item) => ({ "item": item })))
	return Mixing(ingredients, results)
}

const HeatedMixing = (ingredients, results) => {
	const Recipe = Mixing(ingredients, results)
	Recipe.heatRequirement = "heated"
	return Recipe
}

const SuperheatedMixing = (ingredients, results) => {
	const Recipe = Mixing(ingredients, results)
	Recipe.heatRequirement = "superheated"
	return Recipe
}

const Mixing = (ingredients, results) => {
	return {
		"type": C("mixing"),
		"ingredients": ingredients,
		"results": results
	}
}

const Milling = (ingredients, results) => {
	return {
		"type": C("milling"),
		"ingredients": ingredients,
		"results": results
	}
}

const Pressing = (ingredients, results) => {
	return {
		"type": C("pressing"),
		"ingredients": ingredients,
		"results": results
	}
}


const Compacting = (ingredients, results) => {
	return {
		"type": C("compacting"),
		"ingredients": ingredients,
		"results": results
	}
}

const Cutting = (ingredients, results) => {
	return {
		"type": C("cutting"),
		"ingredients": ingredients,
		"results": results
	}
}

const Filling = (ingredients, results) => {
	return {
		"type": C("filling"),
		"ingredients": ingredients,
		"results": results
	}
}

const Emptying = (ingredients, results) => {
	return {
		"type": C("emptying"),
		"ingredients": ingredients,
		"results": results
	}
}

const Splashing = (ingredients, results) => {
	return {
		"type": C("splashing"),
		"ingredients": ingredients,
		"results": results
	}
}

const Deploying = (ingredients, results) => {
	return {
		"type": C("deploying"),
		"ingredients": ingredients,
		"results": results
	}
}

const SequencedAssembly = (ingredient, transitionalItem, sequence, results, loops) => {
	return {
		"type": C("sequenced_assembly"),
		"ingredient": ingredient,
		"transitionalItem": transitionalItem,
		"sequence": sequence,
		"results": results,
		"loops": loops
	}
}

