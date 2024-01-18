import { useGLTF } from "@react-three/drei";

export type hlutur = {
	title: string,
	model: string | undefined,
	mynd: string
};

export function tolvuteikningar(samsetning: string, ihlutur: string): hlutur {
	return ({
		title: ihlutur, model: `/tolvuteikningar_model/${samsetning}/${ihlutur}.glb`,
		mynd: `/tolvuteikningar_myndir/${samsetning}/${ihlutur}.png`
	})
}
export function Model({ url }: any) {
	const { scene } = useGLTF(url) as any
	scene.traverse((o: any) => {
		if (o.isMesh) {
			// o.material.metalness = true;
			o.material.wireframe = true;
		}
	});
	return <primitive object={scene} />
}