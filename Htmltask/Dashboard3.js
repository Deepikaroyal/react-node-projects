import React from 'react';
import './Dashboards.css';
function Dashboard3() {
        return (
            <div>
                <h2>Role Management</h2>
                <div className='search'>
                    Search: <input type="text"></input>
                </div>

                <table>
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Roll Name</th>
                        <th>Created At</th>
                        <th>Active/Inactive</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>SuperAdmin</td>
                        <td>11/10/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,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' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>RoleManager</td>
                        <td>13/10/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/FRX/7e3/r6//dnb/oaH/8PD/+vr/fX3/2tr/Ojr/HR3/GRn/nJz/np7/z8//RET/Pj7/paX/wsL/S0v/qqr/IiL/uLj/U1P/WVn/lpb/9fX/DAz/s7P/NTX/5OT/j4//hob/x8f/KCj/39//kpL/Xl7/c3P/iYn/amr/Li7/Tk7/1dX/bm7/XV2JBBz4AAAGHUlEQVR4nO2da3uiOhCAjWgB612qKGDxhnf3//+7I9o+x51JLcTARHfej242nZcImSTEVCrF4dhx1x8OOkEQbK+4N8zTD2bBW81bWWGBURRGGPunpsjIoXO0qAPOidNN3rPqXYh2fkwddA6cRTLK5XdhXYupA89KHORrv2+qO8+hjj0T3jhSEjyznz/D7djO/HyR0WtQx/8rk0f8UhbUBvexDo8KClEz+WZcjR8XFM2huYrxToPg+Xnjm6pouVoEheh3qVXkOAPlXgIyjqllpHQV8pifmJv4PbU/9AkK4VHrSOjoFBRV8wZUtlZBIdrUQojgTrRRq7ncX1leGbWazWb13pOpaVqGGu7lge43wXDqe563uOLd4Pv+dJCsf1AMqJUANWmUo8HR+uWpGMaePBH6sMuJPCvSlnBXmR761kB6daZFx5yLxqckxiTz89Bfyq5PkQHnpi15aMxy9Nqe5DY2K7HZ4ADXcZ4KOlVUwdIvKFgVYvywyHkb2X/wNeoUFK0KCzz1tM6ZlExxI5qUnE7R3Ew0yFmFgy/SLi4iVjVwTjqK89YxR3WMDZqVSlB0vdx1LFAdBg2EnS2KTqEzQ3XszZl2C/H0hcLQANWxNGeQKDEc5q8F1TEyx9DGhgq9NeouDDKUtKGCIUr8yjN0nPCM/TMxTtqG98pLCVEbNv17laQx6UgJVsFucuj1+v3++x3wYszyXnEpfVSH2N8r3u/3eh/jtfvY9LF1wn/WOEYPZOgN6uAzkmec9hex2lIuAaqjEJypmEpfLYPVsRZYEpFaI8pmFkzFVboT3/CY1FjyTZl8M6MOOwcHpRsRD0nNRW0oqWtFtww+VYaSDhuahJphnTrsHLCh3PBlv6WX4e4ZS7IWYSyf3nfYGQy9994VjS+PFE70eY25X8+wOO5TR/sQh/jVDbMsOrKh2Uxe3jDLMIoNzYYNn99w9/I9PhumeNRBPsTp5Q03bJgaattTQEGW0dNzt2E9w3u3q6+dyXPXnddTNnCFNxrXiYCD8ujj8vHXxunkHLiXZZDvOJeF+3St3EpBy4itwfUfSsfuQcMkvHz+vax/JoMgIoQr7C2y95PhphXFVTWIyYZ6dmWwYYmwoSJsWCJsqAgblggbKsKGJcKGivyDhlW01cA+dv/miCqBJbpousGGJWIUChwfVt+0GDqoXmQ4FBBYAr9uHMDBahuW2MAZCRxJ3v1jyoY1ONFRRYYtGH8bGr7BEmjOhQ3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3ZkA3Z8PkMUb0lGeK1Wk2GcG0Zr7xSGbYUfvjuyQxrbMiGbMiGbMiGbMiGbMiGbMiGbMiGbMiGbEhgaKN982zIhmz4soZ4P9XLGaLDF9mQDYkNK/CMBHMMm5r2esKj/wwy1HREIhuyIRuyIRuyIRsaZGjBs7HZkA1/NKQaAZdnmLy6oZix4bMbRmzIhmxIbshPGjZkQ3pDsvswhqfbvlwblmZoThs+cuj4LRP4p7fGGHoFGc7ZkA3ZkA3ZkA1/NXSJDFdsWKAhjB8bVp/bcLqMqrdEI2QISlRFBxoOBCjhQsPGsizDOiyxGr79DXqTx4YlOugnvxsdUGQBr8GRzrAkCNuwJMprw42eenPTheeusWFW/kHDndIJdY/jwcSCDbOCDNdEhj5MnYozzHJQZAHUYOpXmOEkw2GfRTAozXCc4cDWIkjgMbeFGb4v9FSclzoMpDBDUSe5EX2YtGkz3CFDERAoHuGeASGWXT1VT7FhFJR9KzoLtHwixEFTt+XAjjbl5Flhad2iEx47cO0wRc9xT2dmksrF8pSeozxLUoIv2jd0cnL7f7/rS+uebWfbuYu/oSnaeq1YWj09J12Clcqa2kVOQ59hl9pFyk6fYCV0qW0kVNFc1iMcZU8yYmZaH+UOSnrJGcc6BSsVC+WExHxqStj+Z4WzU0qaA/3pxgpu5yAlKSKfWsGZLkLQGz16sOHP7VIR6flxXQnWxohm7BV4lq0zhDvXy6dZ15isSThuiZtxMi16ZBp2KTO4j1pcsN/F8dgm6jh2XmkzC2G8GLZnc7c05sHAP1pKfeB/krgFo/ymzHwAAAAASUVORK5CYII=' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>AdminManager</td>
                        <td>13/10/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,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' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Admin</td>
                        <td>13/10/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,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' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Org</td>
                        <td>18/10/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,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' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>org_role</td>
                        <td>7/12/2021</td>
                        <td >
                            <img className='imgtable' src="https://1.bp.blogspot.com/-wWi5oHujh0g/X-Lw0jqtx9I/AAAAAAAAoMQ/xkkdD6l3-gkPGs3-U0JcgrwuPW-zxz8ggCLcBGAsYHQ/s1601/662-6622141_on-off-switch-icon-png-download-inv.png" />
                        </td>
                        <td>
                            <img className='imgtable' src='data:image/png;base64,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' />
                            <img className='imgtable' src='https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png' />
                            <img className='imgtable' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzpJStTqrvCtzTOEWYVGB_ec_m3KxWelLQ&usqp=CAU' />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

export default Dashboard3;