class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]); // closest to target first

        let fleets = 0;
        let fleetAheadTime = 0; // arrival time of the fleet directly ahead

        for (const [p, s] of cars) {
            const time = (target - p) / s;
            if (time > fleetAheadTime) {
                fleets++;
                fleetAheadTime = time;
            }
        }
        return fleets;
    }
}