class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
      int arr[32]={0};
        int i=0;
        while(n!=0) {
            int rem = 
            arr[i] = n % 2;
            n= n / 2;
            i++;
        }

        uint32_t ans=0;
        for(int i=0; i < 32; i++){
            ans+=arr[i]*pow(2,32-1-i);
        }
        return ans;
    }
};