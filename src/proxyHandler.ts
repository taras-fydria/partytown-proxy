import {Context, Handler} from "hono";
import {HTTPException} from "hono/http-exception";

const proxyGetHandler: Handler = async (c, next) => {
    const urlQuery = c.req.query('url')

    if (!urlQuery) throw new HTTPException(401, {message: 'Missing url query parameter'})

    const res = await fetch(urlQuery)
    const headers = {...res.headers}


    if ('content-encoding' in headers)
        delete headers['content-encoding']

    if ('content-length' in headers)
        delete headers['content-length']

    return new Response(res.body, {headers})
}


export default proxyGetHandler