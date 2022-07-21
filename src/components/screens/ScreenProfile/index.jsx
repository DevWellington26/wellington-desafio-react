import { Grid } from "@mui/material";
import './styles.css'
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export default function ScreenProfile(props){
    //console.log(props.profile)

    const FollowerButton = styled(Button)({
        backgroundColor: "#f7f7ff",
        color: "black",
        fontWeight: "400",
        padding: "0.5em",
        width: "100%",
        border:"2px solid #F5F5F5"
    })

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 
    ]

    return (
        <Grid className='line'
            container
        >
            <Grid xs={1} />
            <Grid className="spacing spacingTop" item xs={3}>
                <img className="profileImage foreground" src={props.profile.avatar_url}></img>
                <h1 className="fullname">{props.profile.login}</h1>
                <p className="username">{props.profile.login}</p>
                <FollowerButton>Follow</FollowerButton>
                <div className="spacing spacingTop fontdesc">
                    <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                        <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z">
                        </path>
                    </svg>
                    <span className="spacJanuary, February, March, April, May, June, July, August, September, October, November, and December. ing">
                        {props.profile.followers} followers 
                    </span>
                    <span className="spacing">
                        {props.profile.following} following
                    </span>
                    <span>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star UnderlineNav-octicon hide-sm">
                        <path className="spacingRight" fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>
                        Stars
                    </span>
                </div>
                <p className="username">

                </p>
                <hr />
            </Grid>
            <Grid item xs={5}>
                <Button className="spacing" style={{"border-bottom":"3px solid orange", "border-radius": "0px"}}>
                    <svg className="fullname spacingRight" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo UnderlineNav-octicon hide-sm">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    Repositories
                </Button>
                {props.repositories.map(repository => {
                    return (
                        <div className="repository box">
                            <a className="repository" href={repository.html_url}>{repository.name}</a>
                            <p>
                                {repository.description}
                            </p>
                            { repository.language &&
                                <svg className="spacingRight" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"></circle>
                                </svg>
                            }
                            { repository.language && repository.language }
                            { repository.license && <svg className="spacingLeft" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>}
                            { repository.license && ' ' + repository.license.name + ' ' }
                            { 'Updated on ' + new Date(repository.updated_at).getDay() + ' ' + months[new Date(repository.updated_at).getMonth()]}
                            <hr />
                        </div>                                                
                    )
                })}
            </Grid>
        </Grid>
    );
}