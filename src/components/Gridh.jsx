import { useThree } from '@react-three/fiber';
import { GridHelper } from 'three';

export function Gridh() {
  const { scene } = useThree();

  const grid = new GridHelper(10, 1);
  scene.add(grid);

  return null;
}