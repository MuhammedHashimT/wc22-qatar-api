# WORLD CUP 2022 API - QATAR  

##### This API is for getting The main datas of Qatar world cup 2022 
##### You can check https://github.com/raminmr/free-api-worldcup2022 This repo for more details

![](https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/11/21095727/skysports-world-cup-qatar-2022_5921764.jpg)


## Getting Started

#### Firstly you need to  signup on  http://api.cup2022.ir
#### For documentation visit https://github.com/raminmr/free-api-worldcup2022#readme

## How To Install ?

### STEP 1
#### Just open Terminal and enter

```
git clone https://github.com/MuhammedHashimT/wc22.git
```


### STEP 2

```
npm install
```
### STEP 3

#### create a file named  `.env`
#### and add the following

```
email= "< youe email which signed in to http://api.cup2022.ir >"
password= "< your password of http://api.cup2022.ir >"
```

### STEP 4

#### enter on terminal 

```
npm start
```

## How to use API ?

For `GET` all players 

```
http://yourdomain.com/wc22/players 
```

For `GET` players by country name

```
http://yourdomain.com/wc22/players/CountryName
```

For `GET` all matches 

```
http://yourdomain.com/wc22/football/match 
```


For `GET` matches by ID

```
http://yourdomain.com/wc22/football/match/id
```


For `GET` all Team 

```
http://yourdomain.com/wc22/football/team 
```


For `GET` Team by ID

```
http://yourdomain.com/wc22/football/match/id
```


For `GET` Standings

```
http://yourdomain.com/wc22/football/standings 
```

