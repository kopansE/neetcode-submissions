class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet();

        for(int number : nums){
            if(!set.add(number))
                return true;
        }

        return false;
    }
}