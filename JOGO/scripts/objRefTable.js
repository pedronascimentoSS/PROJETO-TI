const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Plugins.Model3D,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{PlanoDeFundoEmBlocos: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{Sprite: 0},
	{Teclado: 0},
	{Sprite2: 0},
	{Sólido: 0},
	{Bloco: 0},
	{MusicaDfundo: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite7: 0},
	{Modelo3D: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Bloco: class extends self.ISpriteInstance {},
	MusicaDfundo: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Modelo3D: class extends self.I3DModelInstance {}
}