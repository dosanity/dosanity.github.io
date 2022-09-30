# Election Analysis

## Project Overview
We are tasked by a Colorado Board of Elections employee to complete the election audit of a recent local congressional election. We are reporting the total number of votes cast, the total number of votes for each candidate, the percentage of votes for each candidate, and the winner of the election based on popular vote. We are looking to automate the process using Python so that we can use the code to audit other congressional districts, senatorial districts, and local elections. In this analysis, we will research three different voting methods: Mail-in ballots, punch cards, and Direct Recording Electronic (DRE) counting machines. Mail-in ballots are typically hand counted at the central office. Punch cards are collected and then fed into a machine that tabulates vote totals and sends the results to the central office. Finally, memory cards from DRE counting machines are sent to the central office and read by a computer. The votes cast by these three methods will determine the final election results. We are generating a vote count report to certify the U.S. congressional race.

We are given the following tasks:
1. Calculate the voter turnout for each county.
2. Calculate the percentage of votes from each county out of the total count.
3. Determine the county with the highest turnout.
4. Calculate the total number of votes cast.
5. Get a complete list of candidates who received votes.
6. Calculate the total number of votes each candidate received.
7. Calculate the percentage of votes each candidate won.
8. Determine the winner of the election based on popular vote.

## Resources

+ Data Source: [election_results.csv](https://github.com/dosanity/election-analysis/files/9227718/election_results.csv)

+ Software: Python 3.10, Visual Studio 1.69.2

## Election Results

### Results of Counties

The analysis of the counties in the election show that:

+ The county results were:
  + Jefferson received 10.5% of the votes and 38,855 number of votes.
  + Denver received 82.8% of the votes and 306,055 number of votes.
  + Arapahoe received 6.7% of the votes and 24,801 number of votes.
+ The largest county turnout was:
  + Denver, which received 82.8% of the votes and 306,055 number of votes.  
  
### Results of Candidates

The analysis of the election show that:

+ There were 369,711 votes casted in the election. 
+ The candidates were: 
  + Charles Casper Stockham
  + Diana DeGette
  + Raymon Anthony Doane
+ The candidate results were:
  + Charles Casper Stockham received 23.0% of the votes and 85,213 number of votes.
  + Diana DeGette received 73.8% of the votes and 272,892 number of votes.
  + Raymon Anthony Doane received 3.1% of the votes and 11,606 number of votes.  
+ The winner of the election was:
  + Diana DeGette, who received 73.8% of the votes and 272,892 number of votes.  
  

## Code Breakdown
**Calculate the voter turnout for each county and the percentage of votes from each county out of the total count.**
```
    # Write a for loop to get the county from the county dictionary.
    for county_name in county_votes:

        # Retrieve the county vote count.
        c_votes = county_votes.get(county_name)

        # Calculate the percentage of votes for the county.
        c_votes_percentage = float(c_votes) / float(total_votes) * 100

        # Print the county results to the terminal.
        county_results = (
            f"{county_name}: {c_votes_percentage:.1f}% ({c_votes:,})\n")

        print(county_results)
```
> Python Output:
```
-------------------------
Jefferson: 10.5% (38,855)

Denver: 82.8% (306,055)

Arapahoe: 6.7% (24,801)
-------------------------
```
**Determine the county with the highest turnout.**
```
        # Write an if statement to determine the winning county and get its vote count.
        if (c_votes > largest_county_count):
            largest_county_count = c_votes
            largest_county = county_name
            largest_county_percentage = c_votes_percentage
```
> Python Output:
```
-------------------------
Largest County Turnout: Denver
Largest County Vote Count: 306055      
Largest County Percentage: 82.8%       
-------------------------
```
**Calculate the total number of votes cast.**
```
# Initialize a total vote counter.
total_votes = 0

    # For each row in the CSV file.
    for row in reader:

        # Add to the total vote count
        total_votes = total_votes + 1
```
> Python Output:
```
-------------------------
Total Votes: 369,711
-------------------------
```
**Calculate the total number of votes each candidate received and the percentage of votes each candidate won.**
```
    # Write a for loop to get the candidate name from dictionary.
    for candidate_name in candidate_votes:

        # Retrieve vote count and percentage
        votes = candidate_votes.get(candidate_name)
        vote_percentage = float(votes) / float(total_votes) * 100
        
        candidate_results = (
            f"{candidate_name}: {vote_percentage:.1f}% ({votes:,})\n")

        # Print each candidate's voter count and percentage to the terminal.
        print(candidate_results)
```
> Python Output:
```
-------------------------
Charles Casper Stockham: 23.0% (85,213)
Diana DeGette: 73.8% (272,892)
Raymon Anthony Doane: 3.1% (11,606)
-------------------------
```
**Determine the winner of the election based on popular vote.**
```
        # Determine winning vote count, winning percentage, and candidate.
        if (votes > winning_count) and (vote_percentage > winning_percentage):
            winning_count = votes
            winning_candidate = candidate_name
            winning_percentage = vote_percentage
```
> Python Output:
```
-------------------------
Winner: Diana DeGette
Winning Vote Count: 272,892
Winning Percentage: 73.8%
-------------------------
```
 
## Election Audit Summary
Using the Python script, we can automate the process so that we can use the code to audit other congressional districts, senatorial districts, and presidential or local elections. 

> For presidential elections, we would analyze states instead of counties to find the percentages and votes of each individual state. Additionally, we can also analyze individual counties within each state. Thus, the script will be modified to look at states.

> For senatorial districts, we can analyze districts instead of counties to look into which district had the most votes. Thus, the script will be modified to look at districts.
